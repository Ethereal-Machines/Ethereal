/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import DocumentMeta from 'react-document-meta';

import './resource.css';

import PageBanner from '../../components/ui/page-banner/page-banner';
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import ResourceForm from './components/resource-form/resource-form';
import Modal from '../../components/ui/modal/modal';
import FormSuccessMsg from '../../components/pages-component/form-success-msg/form-success-msg';
import createResource from '../../services/api/create-resource';
import getQueryReport from '../../services/api/get-queries-report'
import * as utilityFunctions from '../../utility-functions/utility-functions';
import { connect } from 'react-redux';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

// import {GetToken} from '../../../../../helpers/token'

class Resource extends Component {
  constructor(props) {
    super(props);
    this.formData = new FormData();
    this.isStateRequired = false;
    this.allowStateField = false;
    
  
  }

  state = {
    title: '',
    link: '',
    description: '',
    formValid: true,
    errorMsg: null,
    formSubmissionStart: false,
    showModal: false,
   
  }
  static counter = -1;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClearningFormData = () => {
    this.formData.delete('title');
    this.formData.delete('description');
    this.formData.delete('link');
    this.formData.delete('file1');
    this.formData.delete('file2');
    this.formData.delete('file3');
    this.formData.delete('file4');
    this.formData.delete('file5');
  }

  resetProperties = () => {
    this.natureOfQuery = null;
    this.isStateRequired = false;
    this.allowStateField = false;
  }

  onSubmitCallBack = (data) => {
    if (data.status === 200) {
      this.reset();
      console.log(data)
    } else if (data.response) {
      this.setState({
        errorMsg: data.response.data._message,
        showLoader: false,
      });
    } else {
      this.setState({
        errorMsg: 'Something went wrong. Please try again later &#x2639;',
        showLoader: false,
      });
    }
  }


  onSubmitCallBack = (data) => {
    console.log(data)
    if (data.status === 201) {
      document.querySelector(".form--contact-us").reset();
      this.onClearningFormData();
      this.resetProperties();
      utilityFunctions.clearSelectField('.select-input');
      this.setState({
        ...this.state,
        formValid: true,
        errorMsg: null,
        formSubmissionStart: false,
        showModal: true
      });
    } else {
      if (data.response) {
        // console.log(data.response.data);
        this.setState({
          ...this.state,
          formValid: false,
          errorMsg: data.response.data,
          formSubmissionStart: false
        });
        // console.log(this.natureOfQuery);
      } else {
        const genericErrorMsg = { Error: ["Oops! Something went wrong, please try again."] };
        this.setState({
          ...this.state,
          formValid: false,
          errorMsg: genericErrorMsg,
          formSubmissionStart: false
        });
      }
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      formSubmissionStart: true
    });
 
    createResource(this.onSubmitCallBack, this.formData);
  }

  validate = () => {
    const { title, link, description } = this.state;
    return title !== '' && link !== '' && description !== '';
  }
  addFile(){
    if (Resource.counter <= 5 )
    {
      Resource.counter = Resource.counter + 1;
       console.log(Resource.counter)
    }
    }

  onInputChange = (event) => {
    const inputFieldName = event.target.name;
    const targetValue = event.target.value;
    const targetType = event.target.type;
    
    switch (targetType) {
      case 'checkbox':
        this.formData.delete('ispublic');
        this.formData.append('ispublic', targetValue);
        break;

      case 'text':
        if (inputFieldName === 'title') {
          this.formData.delete('title');
          this.formData.append('title', targetValue);
        }
        else
          if (inputFieldName === 'link') {
            this.formData.delete('link');
            this.formData.append('link', targetValue);
          }
        break;
      case 'textarea':
        this.formData.delete('Discription');
        this.formData.append('Discription', targetValue);
        break;

      case 'file':
        if (inputFieldName === 'file1') { 
          this.formData.delete('file1');
          this.formData.append('file1',event.target.files[0]);
        }
        else
          if (inputFieldName === 'file2') {
            this.formData.delete('file2');
            this.formData.append('file2', event.target.files[0]);
          }
          else
          if (inputFieldName === 'file3') {
            this.formData.delete('file3');
            this.formData.append('file3', event.target.files[0]);
          }        else
          if (inputFieldName === 'file4') {
            this.formData.delete('file4');
            this.formData.append('file4', event.target.files[0]);
          }        else
          if (inputFieldName === 'file5') {
            this.formData.delete('file5');
            this.formData.append('file5', event.target.files[0]);
          }
        break;


      default:
        break;
    }

    this.setState({
      ...this.state,
      formData: this.formData,
    });
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  }

  queryReport = () => {
    getQueryReport()
  }

  render() {
    const meta = {
      title: 'Ethereal Machines - Resource',
      meta: {
        property: {
          'title': 'Ethereal Machines - Resource',
          'description': 'Ethereal Machines is glad to assist you with CAD/CAM programming for CNC machining and 3D Printing.',
        }
      }
    };
    return (
      <React.Fragment>
        <Modal show={this.state.showModal} clicked={this.closeModal}>
          <FormSuccessMsg />
        </Modal>
        <div className="page page--contact-us">
          {/* <Helmet>
        <title>Design Help | Ethereal Machines-Bangalore, India.</title>
        <meta name="description" content="Ethereal Machines – get in touch with us."/>
        </Helmet> */}

          <DocumentMeta {...meta} />
          <PageBanner heading={"Ethereal Machines Resource"} subHeading={"Share more..."} classValue={"page-banner--design-help"} />
          <section className="section section--design-help-form">
          <Header />
            <SectionHeading name={"Resource"} classValue={"u-margin-bottom-big u-text-center"} hasSubHeading subHeading={"Share your resource"} />

            <div className="container">
              <ResourceForm onInputChange={this.onInputChange} onSubmitHandler={this.onSubmitHandler} formSubmissionStart={this.state.formSubmissionStart} errorMsg={this.state.errorMsg} natureOfQuery={this.natureOfQuery} isStateRequired={this.isStateRequired} showLoader={this.state.formSubmissionStart} addFile= {this.addFile} counter = {Resource.counter} />
            </div>
            <Footer />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.login
  }
}

export default connect(mapStateToProps)(Resource);