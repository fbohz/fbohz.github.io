import React from 'react';
import _ from 'lodash';
import Icon from './Icon';
import {htmlToReact, Link, withPrefix, classNames} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="site-footer__container">
                <p className="site-info">
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                  <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                  )}
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                  <Link key={action_idx} to={withPrefix(_.get(action, 'url', null))}
                    {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
                    {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
                    className={classNames({'button': _.get(action, 'style', null) === 'button'})}>{_.get(action, 'label', null)}</Link>
                  ))}
                </p>
                {_.get(this.props, 'pageContext.site.siteMetadata.header.has_social', null) && (
                  <div className="social">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.social_links', null), (action, action_idx) => (
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
              </div>
            </footer>
        );
    }
}
