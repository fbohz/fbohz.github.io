import React, { useState } from "react";
import _ from "lodash";
import moment from "moment-strftime";
import { graphql } from "gatsby";

import { Layout } from "../components/index";
import { getPages, Link, withPrefix, classNames } from "../utils";
import {randomImage, getPostsYears} from '../utils/helpers'
import Icon from '../components/Icon';


export const query = graphql`
  query($url: String) {
    sitePage(path: { eq: $url }) {
      id
    }
  }
`;

export default class Blog extends React.Component {
  state = {
    selectedYear: "",
    filteredYears: [],
    display_posts: _.orderBy(
      getPages(this.props.pageContext.pages, "/posts"),
      "frontmatter.date",
      "desc"
      ),
  }
  
  componentDidMount(){
    this.showAllPosts();
  }

  showAllPosts = () => {
    this.setState({ 
      selectedYear: "all",
      filteredYears: [...this.state.display_posts],
    });  
  }

  filterPostsByYear = (year) => {
    return this.state.display_posts.filter(post => post.name.includes(year))
  }

  handleYearSelect = (e) => {
    const value = e.target.value

    if (value === "all") {
      this.showAllPosts();
    } else {
      this.setState({ 
        ...this.state,
        selectedYear: value,
        filteredYears: this.filterPostsByYear(value)
      });
    }
  }
  
  render() {
    return (
      <Layout {...this.props}>
        <small className="muted-center">Other Publications</small>
        {_.get(this.props, 'pageContext.site.siteMetadata.header.has_social', null) && (
                  <div className="social-links">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.body.blog_icon', null), (action, action_idx) => (
                    action && (
                    <Link key={action_idx} to={withPrefix(_.get(action, 'url', null))}
                      {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
                      {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
                      className={classNames({'button button-icon': _.get(action, 'style', null) === 'icon'})}>
                      {((_.get(action, 'style', null) === 'icon') && _.get(action, 'icon_class', null)) ? (<React.Fragment>
                        <Icon {...this.props} icon={_.get(action, 'icon_class', null)} />
                        <span className="screen-reader-text">{_.get(action, 'label', null)}</span>
                      </React.Fragment>) : 
                      _.get(action, 'label', null)
                      }
                    </Link>
                    )
                    ))}
                  </div>
              )}

        <select 
          name="years" 
          className="custom-select"
          onChange={this.handleYearSelect}
          value={this.state.selectedYear}
        >
        <option value="all">--All Years--</option>
        {getPostsYears(this.state.display_posts).map((years, key) => (
            <option key={key} value={years}>
              {years}
            </option>
          ))}
        </select>
        <small className="muted-center">
          Showing {
            this.state.filteredYears.length
          } posts
        </small><br/>
        

        <header className="screen-reader-text">
          <h1>{_.get(this.props, "pageContext.frontmatter.title", null)}</h1>
        </header>
        <div className="post-feed">
          <div className="post-feed-inside">
            {_.map(this.state.filteredYears, (post, post_idx) => (
              <article key={post_idx} className="post post-card">
                <div className="post-inside">
                  {_.get(post, "frontmatter.thumb_img_path", null) ? (
                    <Link
                      className="post-thumbnail"
                      to={withPrefix(_.get(post, "url", null))}
                    >
                      <img
                        src={withPrefix(
                          _.get(post, "frontmatter.thumb_img_path", null)
                        )}
                        alt={_.get(post, "frontmatter.thumb_img_alt", null)}
                      />
                    </Link>
                  ) : (
                    <Link
                      className="post-thumbnail"
                      to={withPrefix(_.get(post, "url", null))}
                    >
                      <img src={`/images/${randomImage(5)}.jpg`} alt="Default image" />
                    </Link>
                  )}
                  <header className="post-header">
                    <h2 className="post-title">
                      <Link
                        to={withPrefix(_.get(post, "url", null))}
                        rel="bookmark"
                      >
                        {_.get(post, "frontmatter.title", null)}
                      </Link>
                    </h2>
                  </header>
                  {_.get(post, "frontmatter.excerpt", null) && (
                    <div className="post-content">
                      <p>{_.get(post, "frontmatter.excerpt", null)}</p>
                    </div>
                  )}
                  <footer className="post-meta">
                    <time
                      className="published"
                      dateTime={moment(
                        _.get(post, "frontmatter.date", null)
                      ).strftime("%Y-%m-%d %H:%M")}
                    >
                      {moment(_.get(post, "frontmatter.date", null)).strftime(
                        "%B %d, %Y"
                      )}
                    </time>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
