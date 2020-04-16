/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './covid-item.css';

import doc from '../../assets/images/Document.svg';
import faq from '../../assets/images/faq.jpg';
import splitter from '../../assets/images/splitter.jpeg';
import ReadMoreAndLess from 'react-read-more-less';

import logoWhite from '../../../../assets/images/logo/logo-white.svg';

const CovidItem = (props) => {

  return (
    <div>
      <div className="container imgbanner">
        <img src={logoWhite} width={80} height={80} />
        <div style={{ fontFamily: "Agency FB Bold", fontSize: "32px" }}>ETHEREAL MACHINES</div>
        <div style={{ fontFamily: "Agency FB Bold", fontSize: "22px" }}>AMAYA - DIFFERENTIAL TWO WAY VENTILATOR SPLITTER</div>
        <div style={{ fontFamily: "Agency FB Bold", fontSize: "18px" }}>A LAST RESORT SOLUTION FOR COVID-19 SURGE</div>
      </div>

      <div className="flex-row">

        <div className="media-item" style={{ height: "600px", width: "30%", paddingRight: "30px" }} align="center">
          Related News of Ethereal Machines
                      </div>

        <div style={{ paddingLeft: "30px", paddingTop: "50px" }}>
          <div className="container">
            <div className="cont">
              <div className="flex-row" >
                <img style={{ width: "50px" }} src={doc} alt="Media" />
                <a style={{ textAlign: "left" }} target="_blank" href="https://forms.gle/wr6wpMXzrXrZjvdS7" className="button" style={{ textAlign: "left", textTransform: "none" }}>Kindly fill this form to <br />receive the Amaya splitters</a>
              </div>
              <br />
              <div className="flex-row" >
                <img style={{ width: "50px" }} src={faq} alt="Media" />
                <a className="button" style={{ textAlign: "left" }} onClick={() => this.onUpdate()}>VIDEO LINK</a>
                {/* <a style={{ textAlign: "left" }} target="_blank" href="https://www.facebook.com/AsterBangalore/videos/726789408129961/" className="button">VIDEO LINK</a> */}
              </div>
            </div>


            <img className="image" src={splitter} alt="Media" />
          </div>

          <br />
          <br />
          <br />
          <div className="media-item flex-row">
            <div className="media-image-container">
              <img src="https://ethereal-website.s3-ap-southeast-1.amazonaws.com/static/COVID-19/appicon.png" alt="Media" />
            </div>
            <div className="media-details-container" >
              <div className="media-title subtitle">
                <span>"COVID-19 | 3D PRINTING AND CNC SOLUTIONS"</span>
              </div>
              <div className="details">
                <ReadMoreAndLess
                  ref={this.ReadMore}
                  className="read-more-content"
                  charLimit={150}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  "We have built an app with the design files that can be manufactured locally. The maker community can use this to add designs, get proven design files and hospitals can use it to make requests for any particular design/part they want. Members of the maker community can look up requests and take up projects depending on their capacity. Given the lockdown, we need to be ready to distribute manufacturing capability to all parts of the country. Let's fight #COVID19A collection of all 3D printable products and requests from healthcare staff."
                              </ReadMoreAndLess>
              </div>

              <div className="media-link">
                <ul className="display-list">
                  {/* {
                                  props.item.link
                                    ? */}
                  <li>
                    <form target="_blank" action="https://3drenders.glideapp.io/">
                      <button className="button">View link attached</button>
                    </form>
                  </li>
                  {/* : null
                                 } */}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CovidItem;
