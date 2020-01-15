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

import halo from '../assets/images/halo.png';
// import haloMedium from '../assets/images/halo--medium.png';
// import haloLarge from '../assets/images/halo--larger.png';

import etherealHaloData from './ethereal-halo-data';

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
      title: 'Ethereal Halo – The Dawn of Manufacturing | Hybrid 5-axis CNC machine and 3D printer.',
      meta: {
        property: {
          'title': 'Ethereal Halo – The Dawn of Manufacturing | Hybrid 5-axis CNC machine and 3D printer.',
           'description':  'Ethereal Halo is the world’s first consumer-oriented simultaneous 5-axis CNC Machine and 5-axis 3D Printer.',
          }
      }
    };
    return (
      <React.Fragment>
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
          <PageBanner heading={'The Ethereal Halo'} subHeading={'The Dawn of Hybrid Manufacturing'} classValue={'page-banner--halo'}>
            <div className="btn btn--golden btn--transparent btn--center-aligned u-text-center" onClick={this.showModal}>Watch Video</div>
          </PageBanner>
          <section className="section section--about-product">
            <div className="container">
              <div className="col-12-grid">
                <div className="product-details">
                  <SectionHeading name={"About Ethereal Halo"} classValue={"u-margin-bottom-small u-text-left"}/>
                  <div className="detail-text">
                    <p>Ethereal Machines brings about a metamorphosis to the world of manufacturing and kicks off the concept of Hybrid Manufacturing. A synergistic combination of CNC machining and advanced 3D printing that allows the user to design and make parts that are challenging to produce by conventional methods of manufacturing.</p>
                    <p>Ethereal Halo is the world 's first consumer-oriented 5-axis CNC Machine and 3D Printer that combines both the technologies of subtractive manufacturing and additive manufacturing, with a high degree of accuracy. This hybrid desktop machine can equip a whole range of creators ranging from a specialist to full-fledged industries, with brisk prototyping and manufacturing capabilities. The technology helps reduce the high cost and risks from setting up multiple set-ups with respect to 5-axis machining. Ethereal Machines offers a 5-axis 3D Printer and CNC Machine with revolutionary 5-axis technology giving you the ability to machine complex shapes efficiently in a single affordable set-up.</p>
                  </div>
                </div>
                <div className="product-img flex-column">
                  <img src={halo} alt="Product" width="464" height="358"/>
                </div>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small">
                <span>What is 5 axis machining?</span>
              </div>
              <div className="detail-text">
                <p>The term “5-axis” refers to a machine’s ability to move a tool or a part in five different axes simultaneously. On a 5-axis machining centre, the tool moves across the X, Y, and Z linear axes and rotates on the A and B axes simultaneously to approach the work piece from any direction. In other words, you will be able to process a part from 5 directions in a single setup.</p>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small">
                <span>Why choose Ethereal Halo?</span>
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
                <a href="https://etherealmachines.com/static/media/Halo-Brochure.pdf" className="display-inline hover-changeto-black">Brochure</a>
                <span className="display-inline"> | </span>
                <a href="https://etherealmachines.com/static/media/Halo-Applications.pdf" className="display-inline hover-changeto-black">Application Examples</a>
              </div>
            </div>
          </section>
          <ProductFeatures features={etherealHaloData.features} />
          <section className="section-no-top-padding section--background-fill">
            <div className="container">
              <div className="section-heading u-text-center u-text-gold">
                <span>Save Money with 5 Axis Machining</span>
              </div>
              <div className="detail-text u-text-white">
                <p>The term “5-axis” refers to a machine’s ability to move a tool or a part in five different axes simultaneously. On a 5-axis machining centre, the tool moves across the X, Y, and Z linear axes and rotates on the A and B axes simultaneously to approach the work piece from any direction. In other words, you will be able to process a part from 5 directions in a single setup.</p>
              </div>
          </div>
          </section>
          <ProductTechSpecs techSpecs={etherealHaloData.techSpecs} product={'halo'}/>
          <section className="section-no-top-padding">
            <div className="container">
              <div className="product-title subtitle u-margin-bottom-small u-text-center u-text-gold">
                <a href="https://etherealmachines.com/static/media/Halo-Technical-Details.docx" className="display-inherit hover-changeto-black">Download Detailed Technical Specifications Document</a>
              </div>
          </div>
          </section>
          {/*<LazyLoad height={200} offset={100} once>
            <ContactUs />
          </LazyLoad>*/}
        </div>
      </React.Fragment>
    );
  }
}

export default EtherealHalo;