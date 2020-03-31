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
import InputFile from '../../../../components/pages-component/form-controls/input-file';
import InputFileJpg from '../../../../components/pages-component/form-controls/input-filejpg';
import Loader from '../../../../components/ui/loader/loader';

import stateOptions from './state-options';
import CheckBox from '../../../../components/pages-component/form-controls/check-box';
// import countryCodeOptions from './country-code-options';

class ResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggle1: false};
    this.state = {isToggle2: false};
    this.state = {isToggle3: false};
    this.state = {isToggle4: false};
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);

  }

  handleClick1(e) {
    this.setState({isToggle1: !this.state.isToggle1});
  }
  
  handleClick2(e) {
    this.setState({isToggle2: !this.state.isToggle2});
  }
  
  handleClick3(e) {
    this.setState({isToggle3: !this.state.isToggle3});
  }
  
  handleClick4(e) {
    this.setState({isToggle4: !this.state.isToggle4});
  }
  
  render() { 

    return (
      <Form {...this.props} classValue={"form form--contact-us"} encType="multipart/form-data">
        <div className="form-controls single-col-layout" >
          <CheckBox labelName={"Is Public"} inputName={"ispublic"} value={"Is-public"}/>
          {/* <Select labelName={"Nature of Query"} inputName={"natureOfQuery"} options={natureOfQuery} defaultValue={"--select--"} isRequired {...this.props} /> */}
          <InputText 
          labelName={"Title"} 
          inputName={"title"} 
          placeholder={"Enter Name of Title"} 
          isRequired {...this.props} 
          />

          <TextArea 
          labelName={"Discription"} 
          inputName={"description"} 
          placeholder={"Add discription here..."}  {...this.props} 
          />

          <InputText 
          labelName={"Link"} 
          inputName={"link"} 
          placeholder={"Add your link here..."}  {...this.props} 
          />
          
          
          <div>

          <InputFileJpg 
          labelName={"Thumnail"} 
          inputName={"file1"} {...this.props} 
          isRequired {...this.props}
          />

          <button className="btn btn-primary" onClick={this.handleClick1} style={{display: this.state.isToggle1 ? 'none': 'block',width:'100%'}} > Add Attachment </button>
          </div>
          

          <div style={{display: this.state.isToggle1 ? 'block': 'none'}}>
          
          <InputFile 
          labelName={"AttachFile2"} 
          inputName={"file2"} {...this.props} 
          />
          
          <button className="btn btn-primary" onClick={this.handleClick2} style={{display: this.state.isToggle2 ? 'none': 'block',width:'100%'}}> Add Attachment </button>
          </div>

          <div style={{display: this.state.isToggle2 ? 'block': 'none'}}>
          <InputFile labelName={"AttachFile3"} inputName={"file3"} {...this.props} />
          <button className="btn btn-primary" onClick={this.handleClick3} style={{display: this.state.isToggle3 ? 'none': 'block',width:'100%'}} > Add Attachment</button>
          </div>

          <div style={{display: this.state.isToggle3 ? 'block': 'none'}}>
          <InputFile labelName={"AttachFile4"} inputName={"file4"} {...this.props} />
          <button className="btn btn-primary" onClick={this.handleClick4} style={{display: this.state.isToggle4 ? 'none': 'block',width:'100%'}}> Add Attachment</button>
          </div>

          <div style={{display: this.state.isToggle4 ? 'block': 'none'}}>
          <InputFile labelName={"AttachFile5"} inputName={"file5"} {...this.props} />
          </div>
          
          
          {/* <button onClick = {this.props.addFile}> 
          add files
          </button>          */}
    </div>
        { this.props.errorMsg ? <ErrorBox isRequired {...this.props} /> : null }
        { this.props.showLoader ? <Loader>Adding your request...</Loader> : null }
        <Button classValue={"form-btn"} disabled={this.props.formSubmissionStart}>Add</Button>
      </Form>
    );
  }
}

export default ResourceForm;