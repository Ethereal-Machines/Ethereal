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
        <img src={props.item.thumbnail} alt="Media" />
      </div>
      <div className="media-details-container">
      {props.item.title}
      </div>
    </div>
  );
};

export default CovidItem;
