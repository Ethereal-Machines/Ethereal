/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
// import { Helmet } from "react-helmet";
import DocumentMeta from 'react-document-meta';

import '../products.css';

import SectionHeading from '../../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../../components/ui/page-banner/page-banner';
import ProductFeatures from '../components/product-features/product-features';
// import ProductTechSpecs from '../components/product-tech-specs/product-tech-specs';
import ContactUs from '../components/contact-us/contact-us';

import pentagram from '../assets/images/images-no-padding/pentagram.png';
import penta from './assets/images/features-images/PentaBrochure.pdf';
// import pentaLarge from '../assets/images/pentagram--large.jpg';
// import pentaMedium from '../assets/images/pentagram--medium.png';
// import pentaLarger from '../assets/images/pentagram-first-frame-2.jpg';

import etherealPentagramData from './ethereal-pentagram-data';
import Header from '../../../components/layout/header/header';
import Footer from '../../../components/layout/footer/footer';


class EtherealPentagram extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const meta = {
      title: 'Ethereal Pentagram – Precise Robust Simultaneous 5-axis CNC Machine.',
      meta: {
        property: {
          'title': 'Ethereal Pentagram – Precise Robust Simultaneous 5-axis CNC Machine.',
           'description':  'The one stop solution for all your machining needs fulfilled by Ethereal Pentagram: Simultaneous 5- axis CNC Machine.',
          }
      }
    };
    return (
      <div className="page page--ethereal-pentagram">
        <Header />
        {/* <Helmet>
        <title>Ethereal Pentagram – Precise Robust Simultaneous 5-axis CNC Machine.</title>
        <meta name="description" content="The one stop solution for all your machining needs fulfilled by Ethereal Pentagram: Simultaneous 5- axis CNC Machine."/>
        </Helmet> */}

<DocumentMeta {...meta} />

        <PageBanner heading={'The Ethereal Pentagram'} subHeading={'Simultaneous 5 Axis CNC Machine'} classValue={'page-banner--pentagram'}/>
        <section className="section section--about-product">
          <div className="container">
            <div className="col-12-grid">
              <div className="product-details">
                <SectionHeading name={"About Ethereal Pentagram"} classValue={"u-margin-bottom-small u-text-left"} />
                <div className="detail-text">
                  <p>Engineered with the highest precision : The Ethereal Pentagram is a Simultaneous 5- axis CNC Machine. Our simultaneous 5-axis machining technology raises the limits on the types of part geometries you can machine. By empowering you to produce highly complex components in a single setup, our 5-axis CNC machines unbridle the imaginations of your engineers and redefine your overall capabilities. Equipped with the capabilities of machining a plethora of materials, the Pentagram is poised to disrupt the manufacturing industry.</p>
                  <p>This Simultaneous 5-axis machining technology not only ensures productive flexibility, but also high cutting performance and maximum precision coupled with high dynamics and excellent accessibility. Apart from the geometrical variety resulting from the 5-axis performance, task-optimized spindle alternatives guarantee perfect general conditions in all the areas of application of the CNC machining technology. The range extends from materials that are tough to cut, e.g. in the aerospace industry, to those which require highest accuracy and surface quality in the area of tool-making and mould-making. Pentagram has been made keeping in mind both the industrial and individual users. The Pentagram is a one stop solution for manufacturing smaller moulds, machining wax, etching PCBs, cutting precision parts. The machine is compatible with a wide range of designing software ensuring easy operability of the machine.</p>
                </div>
              </div>
              <div className="product-img flex-column">
                <img src={pentagram} alt="Product" className="penta-img-size" />
              </div>
            </div>
          </div>
          <br></br>
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small u-text-center u-text-gold">
                <a target="_blank" href="https://ethereal-website2020.s3-ap-southeast-1.amazonaws.com/static/produts/Penta+Brochure.pdf" className="display-inline hover-changeto-black">Download Brochure</a>
              </div>
            </div>
        </section>
        <ProductFeatures features={etherealPentagramData.features}/>
        {/* <ProductTechSpecs techSpecs={etherealPentagramData.techSpecs} product={'pentagram'}/> */}
        {/*<LazyLoad height={200} offset={100} once>
          <ContactUs />
        </LazyLoad>*/}
        <Footer />
      </div>
    );
  }
}

export default EtherealPentagram;