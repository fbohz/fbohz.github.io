import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        const extraClass = `block block-text ${_.get(section, 'extraclass', '')}`;
        const extraClassSection = `block-content ${ _.get(section, 'section_image', null) ? 'block-content-image' : '' }`;
        return (
            <section id={_.get(section, 'section_id', null)} className={ extraClass }>
              <div color="secondary" height="50vh,20vh" width="50vw,50vw" className="Triangle-sc-5fqbqu-0 cMJain"></div>
              <div color="primary" height="20vh,40vh" width="75vw,70vw" className="Triangle-sc-5fqbqu-0 jxmeTQ"></div>
              <div color="muted" height="25vh,20vh" width="100vw,100vw" className="Triangle-sc-5fqbqu-0 bgNTRh"></div>
              <div className="Section__SectionContainer">
                {_.get(section, 'title', null) && (
                <h2 className="block-title underline">
                  <a>{_.get(section, 'title', null)}</a>
                </h2>
                )}
                {_.get(section, 'image', null) && (
                <div className="block-image">
                  <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                </div>
                )}
                {_.get(section, 'content', null) && (
                <div className={ extraClassSection }>
                  <div className="block-content_inner section_text">
                    {markdownify(_.get(section, 'content', null))}
                  </div>
                  {_.get(section, 'section_image', null) && (
                    <div className="block-content_inner section_image">
                      <img src={withPrefix(_.get(section, 'section_image', null))} alt={_.get(section, 'section_image_alt', null)} />
                    </div>
                  )}
                </div>
                )}
                {_.get(section, 'actions', null) && (
                <div className="block-buttons">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}
              </div>
            </section>
        );
    }
}
