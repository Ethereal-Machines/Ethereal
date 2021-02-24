/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import './home.css';

import PageBanner from '../../components/ui/page-banner/page-banner';
import PageBanner_video from '../../components/ui/page-banner/page-banner-video';
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import ContactUsBanner from '../../components/pages-component/contact-us-banner/contact-us-banner';
import HomePageMedia from './components/home-page-media/home-page-media';
import CompanyFeatures from './components/company-features/company-features';
import Products from './components/products/products';
// import Header from './components/layout/header/header';
// import Footer from './components/layout/footer/footer';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (


      <div className="page page--home">
        <Header />
        <PageBanner_video heading={"Welcome to Ethereal Machines"} subHeading={"We build the future of manufacturing. We create entrepreneurs."} classValue={"page-banner--video"} />
        <section className="company-brief">
          <div className="container">
            <div className="detail-text">
              <p>Ethereal Machines is a leading manufacturer of 5-axis CNC Machines in India, based out of Bangalore. Our flagship product Ethereal Halo(Simultaneous 5-axis CNC Machine) is simple, affordable, and accessible to everyone.</p>
              <p>Our other products are the Ethereal pentagram and Ethereal 3D Concrete Printer.</p>
            </div>
          </div>
        </section>
        <section className="section section--products">
          <div className="container">
            {/* <SectionHeading name={"Our wide range of industrial grade products"} classValue={"u-margin-bottom-big u-text-center"} /> */}
            <LazyLoad height={200} offset={200} once>
              <Products />
            </LazyLoad>
          </div>
        </section>
        <section className="section section--why-us section--background-fill">
          <SectionHeading name={"What Defines Us"} classValue={"u-margin-bottom-big u-text-center u-text-white"} />
          <div className="container">
            <LazyLoad height={200} offset={200} once>
              <CompanyFeatures />
            </LazyLoad>
          </div>
        </section>
        <section className="section section--in-media">
          <SectionHeading name={"Ethereal Machines in Media"} classValue={"u-margin-bottom-big u-text-center"} />
          <div className="container">
            <LazyLoad height={200} offset={200} once>
              <HomePageMedia />
            </LazyLoad>
          </div>
        </section>
            {/* <section className="section section--contact-us">
              <div className="container">
                <SectionHeading name={"Contact Us"} classValue={"u-margin-bottom-big u-text-center"} />
                <LazyLoad height={200} offset={200} once>
                  <ContactUsBanner
                    firstText={"Let's get going!"}
                    secondText={"We want to talk to you as well."}
                  />
                </LazyLoad>
              </div>
             </section>*/}
        <Footer />
      </div>


    );
  }
}

export default Home;