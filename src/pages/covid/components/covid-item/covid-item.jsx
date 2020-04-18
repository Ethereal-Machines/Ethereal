/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './covid-item.css';


const CovidItem = (props) => {

  return (
    <div className="media-item">
      <div className="media-image-container">
        <img src={props.item.file1} alt="Media" />
      </div>
      <div className="media-details-container">
        <div className="media-title subtitle">
          {/* <span>{props.item.title}</span> */}
          <marquee><span>asdsaddsad</span></marquee>
        </div>
      </div>
    </div>
  );
};

export default CovidItem;
