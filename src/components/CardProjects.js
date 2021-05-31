import React from 'react';
import _ from 'lodash';
import { withPrefix} from '../utils';
import CtaButtons from './CtaButtons';
import Icon from './Icon';

const CardProjects = ({projectsAttr, section, title, className, ...props}) => {
    return (
        <div className={className ? className : ""}>
            {title ? <h2>Felipe's Technical Portfolio</h2> : null}
                  {_.get(section, 'title', null) && (
                  <h2 className="block-title underline inner-sm">
                    <a>{_.get(section, 'title', null)}</a>
                  </h2>
                  )}
                  <div className="Card__CardContainer">
                    {_.map(_.get(props, `pageContext.site.siteMetadata.${projectsAttr}`, null), (action, action_idx) => (
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
                                  <img alt="Project logo" src={withPrefix(_.get(action, 'image_url', null))} className="Project__ProjectImage" />
                                  <div className="Project__ProjectTag">
                                      <div className="Project__ProjectFeed">
                                        {/* <div className="SocialLink">
                                            <a href={withPrefix(_.get(action, 'repo_url', null))} target="_blank" rel="noreferrer" aria-label="Repository" className="SocialLink__IconLink">
                                              <Icon icon='github' />
                                            </a>
                                        </div> */}
                                        <div className="SocialLink">
                                            <a href={withPrefix(_.get(action, 'deploy_url', null))} target="_blank" rel="noreferrer" aria-label="Repository" className="SocialLink__IconLink">
                                              Launch🚀
                                            </a>
                                        </div>
                                      </div>
                                      <div color="background" className="Project__MainTag"> {_.get(action, 'tags', null)} </div>
                                      {/* <div className="Project__Year">
                                        <div color="primary" className="Project__YearLabel"> {_.get(action, 'year', null)} </div>
                                      </div> */}
                                      <div className="Project__Icon">
                                        <div color="primary" className="Project__YearLabel"> {_.get(action, 'icon', null)} 
                                          <Icon {...props} icon={_.get(action, 'icon_class', null)} />
                                        </div>
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
                    <CtaButtons {...props} actions={_.get(section, 'actions', null)} />
                  </div>
                  )}
            </div>
    )

}

export default CardProjects