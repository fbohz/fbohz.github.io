import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';
import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-hero">
              <div color="muted" height="35vh,80vh" width="95vw,60vw" className="Triangle-sc-5fqbqu-0 cwSELo"></div>
              <div color="secondary" height="38vh,80vh" width="50vw,35vw" className="Triangle-sc-5fqbqu-0 jWkhCU"></div>
              <div color="primary" height="25vh,35vh" width="75vw,60vw" className="Triangle-sc-5fqbqu-0 dguTMa"></div>
              <div color="muted" height="20vh,20vh" width="100vw,100vw" className="Triangle-sc-5fqbqu-0 coWLrL"></div>
              {_.get(section, 'title', null) && (
              <h1 className="block-title inner-sm"><a>{_.get(section, 'title', null)}</a></h1>
              )}
              {_.get(section, 'content', null) && (
              <div className="block-content inner-sm">
                {markdownify(_.get(section, 'content', null))}
              </div>
              )}

              {_.get(this.props, 'pageContext.site.siteMetadata.header.has_social', null) && (
                  <div className="social-links">
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

              <a href="#about" aria-label="Scroll to content" className="ScrollIcon__ScrollLink">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130" className="ScrollIcon__MouseContainer-sc-1f3ft0v-0 rKbQw">
                    <g fill="none">
                      <rect width="70" height="118" x="1.5" y="1.5" rx="36" className="ScrollIcon__Mouse-sc-1f3ft0v-2 kbDULi"></rect>
                      <circle cx="36.5" cy="31.5" r="4.5" className="ScrollIcon__Scroll-sc-1f3ft0v-3 bBkUok"></circle>
                    </g>
                </svg>
              </a>

              {_.get(section, 'actions', null) && (
              <div className="block-buttons inner-sm">
                <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
              </div>
              )}
            </section>
        );
    }
}
