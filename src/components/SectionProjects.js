import React from 'react';
import _ from 'lodash';
import { withPrefix} from '../utils';
import CtaButtons from './CtaButtons';
import Icon from './Icon';
import CardProjects from './CardProjects';

export default class SectionProjects extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-projects">
              <div color="secondary" height="80vh,80vh" width="100vw,100vw" className="Triangle-sc-5fqbqu-0 jSPVkD"></div>
              <div color="background" height="50vh,20vh" width="50vw,50vw" className="Triangle-sc-5fqbqu-0 CHkEh"></div>
              <div color="primary" height="25vh,40vh" width="75vw,60vw" className="Triangle-sc-5fqbqu-0 cWoKIg"></div>
              <div color="muted" height="25vh,20vh" width="100vw,100vw" className="Triangle-sc-5fqbqu-0 daXROC"></div>
              <CardProjects projectsAttr="projects" section={section}{ ...this.props} className="Section__SectionContainer"/>
            </section>
        );
    }
}
