import React from "react";
import _ from "lodash";
import moment from "moment-strftime";

import { getPages, Link, withPrefix } from "../utils";
import CtaButtons from "./CtaButtons";
import {randomImage} from '../utils/helpers'
export default class SectionPosts extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    let display_posts = _.orderBy(
      getPages(this.props.pageContext.pages, "/posts"),
      "frontmatter.date",
      "desc"
    );
    let recent_posts = display_posts.slice(
      0,
      _.get(section, "posts_number", null)
    );
    return (
      <section
        id={_.get(section, "section_id", null)}
        className="block block-posts"
      >
        <div
          color="muted"
          height="15vh,10vh"
          width="100vw,100vw"
          className="Triangle-sc-5fqbqu-0 fJCtjV"
        ></div>
        <div
          color="secondary"
          height="50vh,40vh"
          width="70vw,40vw"
          className="Triangle-sc-5fqbqu-0 kAyYxC"
        ></div>
        <div
          color="primary"
          height="40vh,15vh"
          width="100vw,100vw"
          className="Triangle-sc-5fqbqu-0 bBTNjf"
        ></div>
        <div className="Section__SectionContainer">
          {_.get(section, "title", null) && (
            <h2 className="block-title underline inner-sm">
              <a>{_.get(section, "title", null)}</a>
            </h2>
          )}
          <div className="Card__CardContainer">
            {_.map(recent_posts, (post, post_idx) => (
              <div key={post_idx} className="Card__Wrapper">
                <Link to={withPrefix(_.get(post, "url", null))}>
                  <div className="Card">
                    <h2 className="Post__EllipsisHeading">
                      {_.get(post, "frontmatter.title", null)}
                    </h2>
                    {_.get(post, "frontmatter.thumb_img_path", null) ? (
                      <img
                        src={withPrefix(
                          _.get(post, "frontmatter.thumb_img_path", null)
                        )}
                        alt={_.get(post, "frontmatter.thumb_img_alt", null)}
                      />
                    ) : (
                      <img src={`/images/${randomImage()}.jpg`} alt="Default image" />
                    )}
                    {_.get(post, "frontmatter.excerpt", null) && (
                      <div className="Post__CoverExcerpt">
                        <p>{_.get(post, "frontmatter.excerpt", null)}</p>
                      </div>
                    )}
                    <time
                      className="Post__CoverTime"
                      dateTime={moment(
                        _.get(post, "frontmatter.date", null)
                      ).strftime("%Y-%m-%d %H:%M")}
                    >
                      {moment(_.get(post, "frontmatter.date", null)).strftime(
                        "%B %d, %Y"
                      )}
                    </time>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {_.get(section, "actions", null) && (
            <div className="block-buttons inner-sm">
              <CtaButtons
                {...this.props}
                actions={_.get(section, "actions", null)}
              />
            </div>
          )}
        </div>
      </section>
    );
  }
}