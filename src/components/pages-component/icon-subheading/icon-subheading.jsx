/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import call from './call.svg';
import envelope from './envelope.svg';

const IconsubHeading = (props) => {
  return (
    <div className={props.classValue}>

      {
        props.hasSubHeading1 ?
          <div style={{ display: 'block', }}>

            <div style={{
              display: 'inline-block',
              height: '40px',
              padding:'6px',
            }}>
              <img src={envelope} alt="Facebook" width="30" height="30" />
            </div>

            <div style={{
              display: 'inline-block',
              height: '40px',
            }}>

              <div className="section-sub-heading"
                style={{
                  display: 'block',
                  height: '20px',
                }}>{props.subHeading}</div>
              <div className="section-sub-heading"
                style={{
                  display: 'block',
                  height: '20px',
                }}
              >{props.subHeading1}</div>

            </div>
          </div>
          :
          <div>
            {
              props.hasSubHeading ?
                <div style={{
                  display: 'block',
                }}>
                  <div style={{
                    display: 'inline-block',
                    height: '40px',
                    verticalAlign: 'bottom',
                    padding:'6px',
                  }}>
                    <img src={call} alt="Facebook" width="30" height="30" />
                  </div>
                  <div className="section-sub-heading" style={{
                    display: 'inline-block',
                    height: '40px'
                  }}>{props.subHeading}</div>
                </div>
                :
                null
            }
          </div>
      }
    </div>
  );
};

export default IconsubHeading;