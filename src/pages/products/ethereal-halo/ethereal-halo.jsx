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
import ProductTechSpecs from '../components/product-tech-specs/product-tech-specs';
import ContactUs from '../components/contact-us/contact-us';
import Modal from '../../../components/ui/modal/modal';

import halo from '../assets/images/halo2020croped.png';
import HaloBrouchure from './assets/images/features-images/HaloBrochure.pdf';
import HaloApplication from './assets/images/features-images/HaloApplications.pdf';
// import haloMedium from '../assets/images/halo--medium.png';
// import haloLarge from '../assets/images/halo--larger.png';

import etherealHaloData from './ethereal-halo-data';

import Header from '../../../components/layout/header/header';
import Footer from '../../../components/layout/footer/footer';




class EtherealHalo extends Component {

  state = {
    showModal: false
  }

  stopPlayingVideo = () => {
    /* A simple method to stop the youtube video when the modal is closed */
    let iframe = document.querySelector('.player'); // getting the iframe element
    const iframeSrc = iframe.src; // getting the source of element
    iframe.src = iframeSrc; // resetting the source of the element
  }

  showModal = () => {
    this.setState({
      ...this.state,
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });

    this.stopPlayingVideo();
  }

  componentDidMount() {

    window.scrollTo(0, 0);
  }

  render() {


    const meta = {
      title: 'Ethereal Halo - Compact Simultaneous 5- Axis CNC Machine.',
      meta: {
        property: {
          'title': 'Ethereal Halo - Compact Simultaneous 5- Axis CNC Machine.',
          'description': 'Ethereal Halo is the world’s first consumer-oriented simultaneous 5-axis CNC Machine and 5-axis 3D Printer.',
        }
      }
    };
    return (
      <React.Fragment>
        <Header />

        <Modal show={this.state.showModal} clicked={this.closeModal}>
          <iframe
            width="720"
            height="420"
            src="https://www.youtube-nocookie.com/embed/4c_7WmSYjMU?rel=0" frameBorder="0"
            allowFullScreen
            className="player">
          </iframe>
        </Modal>
        <div className="page page--ethereal-halo">



          <DocumentMeta {...meta} />

          {/* <Helmet>
        <title>Ethereal Halo – The Dawn of Manufacturing | Hybrid 5-axis CNC machine and 3D printer.</title>
        <meta name="description" content="Ethereal Halo is the world’s first consumer-oriented simultaneous 5-axis CNC Machine and 5-axis 3D Printer."/>
        </Helmet> */}
          <PageBanner heading={'The Ethereal HALO – ATC'} subHeading={'Compact Simultaneous 5 axis CNC Machine'} classValue={'page-banner--halo'}>
            <div className="btn btn--golden btn--transparent btn--center-aligned u-text-center" onClick={this.showModal}>Watch Video</div>
          </PageBanner>
          <section className="section section--about-product">
            <div className="container">
              <div className="col-12-grid">
                <div className="product-details">
                  <SectionHeading name={"About Ethereal Halo"} classValue={"u-margin-bottom-small u-text-left"} />
                  <div className="detail-text">
                    <p>Introducing our next generation Ethereal HALO (Simultaneous 5 axis CNC machine) with a Carousel type ATC function that features a 12 pieces tool magazine with a 2.2 kW high-speed spindle. This compact machine is pocket friendly and easy to use while maintaining industrial level accuracies. HALO is ideal for MSMEs &amp;amp; SMBs who are looking to upgrade their capability from 3-axis and 4-axis to 5-axis operations that include both indexing and simultaneous functionalities.</p>
                    <p>HALO provides opportunities for a wide range of applications from light to heavy-duty manufacturing for automobile &amp; aerospace components, moulds, tool &amp; die, dental crown/bridge, machining wax, electrode, cutting precision parts, etc.</p>
                  </div>
                </div>
                <div className="product-img flex-column">
                  <img src={halo} alt="Product"  style={{marginTop:-50,width:"158", height:"158", objectFit:"contain"}} />
                </div>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small">
                <span>WHAT IS 5 AXIS MACHINING?</span>
              </div>
              <div className="detail-text">
                <p>The term “5-axis” refers to a machine’s ability to move a tool or a part in five different axes simultaneously. On a 5-axis machining centre, the tool moves across the X, Y, and Z linear axes and rotates on the A and B axes simultaneously to approach the work piece from any direction. In other words, you will be able to process a part from 5 directions in a single setup.</p>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small">
                <span>WHY CHOOSE ETHEREAL HALO?</span>
              </div>
              <div className="detail-text">
                <p>Ethereal Machines continues to improve its products with its customer in mind. Our 5-axis machining technology helps in the cost-effective manufacturing of complex designs.</p>
                <p>Investing in a hybrid machine like Ethereal Halo will make an enormous difference to your business’s efficiency, productivity and most importantly to your bottom line profits.</p>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small u-text-center u-text-gold">
                <span>Download</span>
                <br></br>
                <a target="_blank" href="https://ethereal-website2020.s3-ap-southeast-1.amazonaws.com/static/produts/Halo2020/HALO+Brochure.pdf" className="display-inline hover-changeto-black">Brochure</a>
                <span className="display-inline"> | </span>
                <a target="_blank" href="https://ethereal-website2020.s3-ap-southeast-1.amazonaws.com/static/produts/Halo2020/Application+Samples+-+Halo.pdf">Application Examples</a>
              </div>
            </div>
          </section>
          <ProductFeatures features={etherealHaloData.features} />
          <section className="section-no-top-padding section--background-fill">
            <div className="container">
              {/* <div className="section-heading u-text-center u-text-gold">
                <span>Save Money with 5 Axis Machining</span>
              </div> */}
            </div>
          </section>
          <ProductTechSpecs techSpecs={etherealHaloData.techSpecs} product={'halo'} />
          <section className="section-no-top-padding">
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small u-text-center u-text-gold">
                <a href="https://ethereal-website2020.s3-ap-southeast-1.amazonaws.com/static/produts/Halo2020/TECHNICAL+SPECIFICATION+-+HALO.pdf" className="display-inherit hover-changeto-black">Download Detailed Technical Specifications Document</a>
              </div>
            </div>
          </section>
          {/*<LazyLoad height={200} offset={100} once>
            <ContactUs />
          </LazyLoad>*/}

        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default EtherealHalo;