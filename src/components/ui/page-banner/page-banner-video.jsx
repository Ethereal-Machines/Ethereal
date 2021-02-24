/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './page-banner.css';
import bannervideo from './assets/images/Dsc 0208-1(1).mp4';
import overlay from './assets/images/overlay.png';

const pageBanner = (props) => {
  return (
    <div className={`page-banner--video`}>
      <div className={`page-banner--video-color-overlay`}></div>
      <img src={overlay} className={`page-banner--video-overlay`} />
      <video oncontextmenu="return false;" className='page-banner--video1' autoPlay loop muted controls={false} controlsList="nodownload">
        <source src={bannervideo} type="video/mp4" />
      </video>

      <div className="container container--page-banner">
        <h1 className="primary-heading u-text-center">
          <span className="primary-heading--main">{props.heading}</span>
          <hr className="hr--primary-heading" />
          <span className="primary-heading--sub">{props.subHeading}</span>
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default pageBanner;