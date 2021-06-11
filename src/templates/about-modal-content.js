import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

// import {Layout} from '../components/index';
// import {htmlToReact, withPrefix} from '../utils';
// import ReactModal from 'react-modal'
// import { Link } from 'gatsby'


// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class AboutModalContent extends React.Component {

    render() {
        return (
            <div className="post-content inner-sm"><br />
                <ul>
                    <li><strong><a href="https://catoro.vercel.app/" rel="noopener noreferrer">Catoro</a></strong><br /> Professional Coffee Cupping App. Implemented UI employing React and Redux with React-Boostrap for styling. Utilized JSON Web Tokens through React Google Login and localStorage to store encrypted user information. ES6+ JavaScript, React Hook-Form, and Chart.js.</li>
                    <li><strong><a href="https://yijingballz.herokuapp.com/" rel="noopener noreferrer">Yijing Ball Z</a></strong> <br />I-Ching Oracle Inspired by Dragon Ball Z. Vanilla JavaScript frontend and implemented Node.js/Express API server with MongoDB database and GraphQL querying for authenticating users. Handled AJAX CRUD calls in JSON. Used Facebook JS SDK.</li>
                    <li><strong><a href="https://studio-ghibli-fanhub.herokuapp.com/" rel="noopener noreferrer">Studio Ghibli&rsquo;s Fan Hub</a></strong> <br /> React app with eCommerce built-in using Stripe API for payment gateway. Implemented NoSQL Firebase for serverless storage. Login with Google Login and Styled Components patterns for UI. State management through React Hooks, Redux, enhanced by Redux Reselect / Redux Persist and Redux-Saga.</li>
                    <li><strong><a href="https://angular-test-e364e.web.app/" rel="noopener noreferrer">Cook-n-Shop</a></strong><br /> Angular cooking and recipe app with user authentication. Uses Firebase for database and hosting. Implements the latest Angular patterns including dynamic components, services, directives and optimization with module patterns.</li>
                    <li><strong><a href="https://gabophiles.netlify.app/" rel="noopener noreferrer">Magic Realism Library</a></strong><br /> Magic Realism book site built with Gatsby plus Firebase backend for dynamic rendering.</li>
                    <li><strong><a href="https://uff-app.herokuapp.com/" rel="noopener noreferrer">Uff! - Street Art Finder</a></strong><br /> Full MVC Rails app with RESTful patterns + PostgreSQL database. Implemented custom ActiveRecord model validations, authentication through Devise / Omniauth (Facebook, GoogleAuth) and password encryption through Bcrypt. Google Cloud Storage and MiniMagick.</li>
                    <li><strong><a href="http://fbohz.com/html5_games/retro_snake.html" rel="noopener noreferrer">Retro Snake</a></strong><br /> Clone of the classic arcade game with HTML5 and JavaScript. Node.js/Express API + MongoDB backend to track high scores. Groove with the retro music and play on.</li>
                    <li><strong><a href="https://rubygems.org/gems/coingecko" rel="noopener noreferrer">Coingecko (Ruby Gem)</a></strong> <br /> Ruby API Gem for Coingecko Blockchain Market Watch. More than 3K downloads to date.</li>
                    <li><strong><a href="http://fbohz.com/css-learning/museo-demo/index.html" rel="noopener noreferrer">Museo (CSS + SASS)</a></strong> <br /> Single page landing demo of tour company site. Used SASS + 7-1 architecture pattern with BEM methodology.</li>
                </ul>
            </div>
        );
    }
}