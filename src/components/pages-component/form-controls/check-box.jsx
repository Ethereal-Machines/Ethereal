/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import FormControl from './components/form-control';

const CheckBox = (props) => {
  return (
    <FormControl>
      <label>
      <input 
          type="checkbox" 
          onChange={props.onInputChange} 
          name={props.inputName} 
          id={props.inputName} 
          required={props.isRequired}
          style={{width:'10%'}}
      />
      {props.labelName}
      </label>
    </FormControl>
  );
};

export default CheckBox;
