/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import NavBtn from '../../components/ui/nav-btn/nav-btn';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

import './error-page.css';

class ErrorPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--error-page">
        <Header />
        <section className="section section--404">
          <div className="container container--error-page">
            <div className="content">
              <h1 className="primary-heading u-text-center">
                <span className="primary-heading--main">404</span>
                <span className="primary-heading--sub">
                  Oops, Sorry we can't find that {this.props.msg ? "job" : "page"}!
                </span>
              </h1>
              <NavBtn url={this.props.msg ? 'careers' : ''} classValue={'btn--blue'}>
                Go to {this.props.msg ? "Carrer" : "Home"}
              </NavBtn>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ErrorPage;
