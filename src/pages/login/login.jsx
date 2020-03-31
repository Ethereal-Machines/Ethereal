/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import LoginForm from './component/login-form/login-form'
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

class Login extends Component {
  render() {
    return (
      <div className="page page--login">
        <Header />
        <section className="section flex-row">
          <div className="container">
           <LoginForm history={this.props.history}/>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Login;
