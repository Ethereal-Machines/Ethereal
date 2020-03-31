/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import Form from '../../../../components/pages-component/form/form';
import ErrorBox from '../../../../components/pages-component/form/components/error-box';
import Button from '../../../../components/pages-component/button/button';
import InputText from '../../../../components/pages-component/form-controls/input-text';
import InputEmail from '../../../../components/pages-component/form-controls/input-email';
import Select from '../../../../components/pages-component/form-controls/select';
import TextArea from '../../../../components/pages-component/form-controls/text-area';

import Loader from '../../../../components/ui/loader/loader';

import stateOptions from './state-options';
// import countryCodeOptions from './country-code-options';

class DesignHelpForm extends Component {
  render() { 

    return (
      <Form {...this.props} classValue={"form form--contact-us"}>
        <div className="form-controls single-col-layout">
          {/* <Select labelName={"Nature of Query"} inputName={"natureOfQuery"} options={natureOfQuery} defaultValue={"--select--"} isRequired {...this.props} /> */}
          <InputText labelName={"Name"} inputName={"name"} placeholder={"Enter Name"} isRequired {...this.props} />
          <InputText labelName={"Country"} inputName={"country"} placeholder={"Enter Country"} isRequired {...this.props} />
          <InputText labelName={"Design Files / Images"} inputName={"imagelink"} placeholder={"Kindly drop a drive link"} isRequired {...this.props} />
          <InputText labelName={"Email"} inputName={"email"} placeholder={"Enter Email"} isRequired {...this.props} /> 
          {/* <Select labelName={"Country Code"} inputName={"countryCode"} options={countryCodeOptions} defaultValue={"--select--"} isRequired type={"countryCode"} {...this.props} /> */}
          <InputText labelName={"Contact Number"} inputName={"contact_number"} placeholder={"Contact No. with Country Code (e.g. +91XXXXXXXXXX)"} isRequired {...this.props} />
      
          <TextArea labelName={"Specific Queries"} inputName={"specificQueries"} placeholder={"Add details about product/design/type of machining"}  {...this.props} />
        </div>
        { this.props.errorMsg ? <ErrorBox isRequired {...this.props} /> : null }
        { this.props.showLoader ? <Loader>Submitting your request...</Loader> : null }
        <Button classValue={"form-btn"} disabled={this.props.formSubmissionStart}>Submit</Button>
      </Form>
    );
  }
}

export default DesignHelpForm;