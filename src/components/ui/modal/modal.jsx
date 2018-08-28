/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './modal.css';
import Backdrop from '../backdrop/backdrop';

const modal = (props) => {
  const classes = ['modal'];
  if (props.show) {
    classes.push('modal-open');
  } else {
    classes.push('modal-close');
  }
  return (
    <Backdrop show={props.show} clicked={props.clicked}>
      <div className={classes.join(' ')} onClick={(event) => event.stopPropagation()}>
        {props.children}
      </div>
    </Backdrop>
  );
};

export default modal;