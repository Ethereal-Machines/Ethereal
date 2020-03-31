/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import FormControl from './components/form-control';

const InputFile = (props) => {
  return (
    <div>
      <FormControl>
        <label htmlFor={props.inputName}>
          {props.labelName}
          {props.isRequired ? <span className="star">*</span> : null}
        </label>
        <input type="file" 
        onChange={props.onInputChange} 
        name={props.inputName} 
        className="input-element file-input" 
        id={props.inputName} 
        required={props.isRequired} 
        accept=".pdf, .doc, .docx, .md, .rst ,.jpg ,.png" />
      </FormControl>
    </div>
  );
};

export default InputFile;