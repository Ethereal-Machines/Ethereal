/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import DocumentMeta from 'react-document-meta';

import '../products.css';

import SectionHeading from '../../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../../components/ui/page-banner/page-banner';

import './ethereal-concrete.css';
import Header from '../../../components/layout/header/header';
import Footer from '../../../components/layout/footer/footer';

class EtherealConcrete extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const meta = {
      title: 'Ethereal 3D Concrete Printer | A new innovation from ethereal Machines…',
      meta: {
        property: {
          'title': 'Ethereal 3D Concrete Printer | A new innovation from ethereal Machines…',
           'description':  'Ethereal Machine’s 3D Concrete printer is India’s first automated concrete laying machine.',
          }
      }
    };
    return (
      <div className="page page--blog">
        <Header />
        {/* <Helmet>
        <title>Ethereal 3D Concrete Printer | A new innovation from ethereal Machines…</title>
        <meta name="description" content="Ethereal Machine’s 3D Concrete printer is India’s first automated concrete laying machine."/>
        </Helmet> */}
        <DocumentMeta {...meta} />


        <PageBanner heading={'Ethereal Concrete 3D Printer'} subHeading={'India’s first automated concrete laying machine!'} classValue={'page-banner--concrete'}/>
        <section className="section section--about-product">
          <div className="container">
            <div className="col-12-grid">
              <div className="product-details">
                <SectionHeading name={"About Ethereal Concrete 3D Printer"} classValue={"u-margin-bottom-small u-text-left"} />
                <div className="detail-text">
                  <p>Ethereal Machines is proud to announce it’s latest creation, India’s first automated concrete laying machine – a Concrete 3D printer (Patent filed). Concrete 3D printing technology has the potential to enable housing for millions of people.</p>
                  <p>A drastic pivot in the construction industry is long overdue as traditional methods of infrastructure construction have a few drawbacks. The current processes are expensive, slow, labor intensive, generate a lot of construction waste, difficult to implement in remote areas and do not allow for complex shape creation. These methods create economic and logistical hurdles for low cost housing, rapid and emergency relief construction.</p>
                  <p>We strongly believe that every Indian family is entitled to a stable abode. Better infrastructure is the harbinger of a bright prospective future for our country. Automating the construction industry is the only approach towards achieving that goal, as it will lead to faster and cheaper construction techniques. It also enables in reaching out to hinterlands where building structures is cumbersome.</p>
                  <p>Our initial attempts will be on the lines of the Swachh Bharat Abhiyaan to 3D print toilets across India. India has an estimated urban housing shortage of 18.8 million dwelling units and a rural housing shortage of 47.4 million units. With the Ethereal Concrete 3D printing technology, we hope to cater to this lacuna. We will also be targeting low cost housing, remote location construction and emergency relief constructions.</p>
                  <p>At present, we are testing out formulations of the concrete mixture to optimize build time and enhance durability of the printed structure. In-depth details of our technology, materials used and projects undertaken will be released soon.</p>
                </div>
              </div>
              <div className="product-img flex-column">
                <img src="https://etherealmachines.com/static/media/product-image.c868f7b9.jpg" alt="Ethereal Concrete 3D Printer" className="product-topimg-right-column"/>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-no-top-padding">
          <div className="container">
            <div className="secondary-img-container three-col-layout">
              <img src="https://etherealmachines.com/static/media/product-image-1.f7ae433d.jpg" alt="Ethereal Concrete 3D printer" width="400"/>
              <img src="https://etherealmachines.com/static/media/product-image-2.ef1f7473.jpg" alt="Ethereal Concrete 3D printer" width="400"/>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default EtherealConcrete;