/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

const SectionHeadingfooter = (props) => {
  return (
    <div className={props.classValue}>
      <h3 className="section-heading">{props.name}</h3>
      {
        props.hasSubHeading ?
          <span style={{
            fontWeight: '700',
            fontSize: '2.3rem',
            color: '#000000',
          }}
            className="section-sub-heading">{props.subHeading}</span> :
          null
      }
    </div>
  );
};

export default SectionHeadingfooter;