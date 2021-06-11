import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix} from '../utils';
import ReactModal from 'react-modal'
import { Link } from 'gatsby'
import AboutModalContent from './about-modal-content'


// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

// ReactModal.setAppElement('#main')
export default class Page extends React.Component {
    state = {
      isModalOpen: false,
    }
    
    handleModalOpen = event => {
      // console.log('handleModalOpen: ', event);
      this.setState({ isModalOpen: true })
    }
  
    handleModalClose = event => {
      // console.log('handleModalOpen: ', event);
      this.setState({ isModalOpen: false })
    }

    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full" id="main">
                <header className="post-header inner-sm">
                  <h1 className="post-title underline">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="post-subtitle inner-sm">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'pageContext.frontmatter.img_path', null) && (
                <div className="post-image">
                  <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.img_path', null))} alt={_.get(this.props, 'pageContext.frontmatter.img_alt', null)} />
                </div>
                )}
                <div className="post-content inner-sm">
                  <p>
                    <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.about-img', null))} alt={_.get(this.props, 'pageContext.frontmatter.img_alt', null)} />
                  </p>
                    <Link to="" onClick={this.handleModalOpen} className="button">
                      Technical Portfolio✨
                    </Link>
                </div>
                    <ReactModal
                      isOpen={this.state.isModalOpen}
                      onRequestClose={this.handleModalClose}
                      contentLabel="Felipe's Full Tech Portfolio"
                      // style={modalSyles()}
                      ariaHideApp={false}
                    >
                      <h2>Felipe's Technical Portfolio</h2>
                      <AboutModalContent />
                      <button onClick={this.handleModalClose}>Close</button>
                    </ReactModal>
                <br/>
                <div className="post-content inner-sm">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
              </article>
            </Layout>
        );
    }
}



// const modalSyles = () => {
//   const customContent = {
//     content: {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       overlay: {
//         zIndex: 100
//       }
//     }
//   }
//   const innerWidth = window.innerWidth
//   if ( innerWidth >= 600) {
//     customContent.content.transform = 'translate(-50%, 0%)'
//   } 
//   else {
//     customContent.content.transform = 'translate(-50%, -90%)'
//   }
//   return customContent;
// };

// const temp =  () => {
//   return (
//     <React.Fragment>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//         A minima, deserunt soluta officiis commodi aspernatur beatae sunt qui rerum fugiat ratione tempore. 
//         Quas odit quae ipsa voluptates velit earum veritatis.</p>
//     </React.Fragment>
//   )
// }