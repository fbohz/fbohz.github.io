import React from 'react';
import _ from 'lodash';
import { withPrefix} from '../utils';
import CtaButtons from './CtaButtons';
import Icon from './Icon';

export default class SectionProjects extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-projects">
              <div color="secondary" height="80vh,80vh" width="100vw,100vw" className="Triangle-sc-5fqbqu-0 jSPVkD"></div>
              <div color="background" height="50vh,20vh" width="50vw,50vw" className="Triangle-sc-5fqbqu-0 CHkEh"></div>
              <div color="primary" height="25vh,40vh" width="75vw,60vw" className="Triangle-sc-5fqbqu-0 cWoKIg"></div>
              <div color="muted" height="25vh,20vh" width="100vw,100vw" className="Triangle-sc-5fqbqu-0 daXROC"></div>
              <div className="Section__SectionContainer">
                  {_.get(section, 'title', null) && (
                  <h2 className="block-title underline inner-sm">
                    <a>{_.get(section, 'title', null)}</a>
                  </h2>
                  )}
                  <div className="Card__CardContainer">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.projects', null), (action, action_idx) => (
                      action && (
                        <div key={action_idx} className="Card__Wrapper">
                          <div className="Card">
                            <div className="Card_Item">
                              <div className="Project__TextContainer">
                                <span>
                                    <div color="text" className="Project__Title"> {_.get(action, 'label', null)} </div>
                                </span>
                                <div width="1" color="text" className="Project__Content"> {_.get(action, 'excerpt', null)} </div>
                              </div>
                              <div className="Project__ImageContainer">
                                  <img alt="Facebook logo" src={withPrefix(_.get(action, 'image_url', null))} className="Project__ProjectImage" />
                                  <div className="Project__ProjectTag">
                                      <div className="Project__ProjectFeed">
                                        {/* <div className="SocialLink">
                                            <a href={withPrefix(_.get(action, 'repo_url', null))} target="_blank" rel="noreferrer" aria-label="Repository" className="SocialLink__IconLink">
                                              <Icon icon='github' />
                                            </a>
                                        </div> */}
                                        <div className="SocialLink">
                                            <a href={withPrefix(_.get(action, 'deploy_url', null))} target="_blank" rel="noreferrer" aria-label="Repository" className="SocialLink__IconLink">
                                              🚀
                                            </a>
                                        </div>
                                      </div>
                                      <div color="background" className="Project__MainTag"> {_.get(action, 'tags', null)} </div>
                                      <div className="Project__Year">
                                        <div color="primary" className="Project__YearLabel"> {_.get(action, 'year', null)} </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                  {_.get(section, 'actions', null) && (
                  <div className="block-buttons inner-sm">
                    <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                  </div>
                  )}
              </div>
            </section>
        );
    }
}
