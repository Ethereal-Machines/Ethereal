/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import logoWithName from '../../../assets/images/logo/logo-with-name-white.svg';
import ces from './assets/images/ces.png';
import makeInIndia from './assets/images/make-in-india.png';
import startupIndia from './assets/images/startup-india.svg';

/* Importing social media icons */
import close from './assets/images/social-media-icons/close.png';
import pdf from './assets/images/social-media-icons/pdf.svg';
import facebook from './assets/images/social-media-icons/facebook.svg';
import insta from './assets/images/social-media-icons/instagram.png';
import linkedin from './assets/images/social-media-icons/linkedin.svg';
import twitter from './assets/images/social-media-icons/twitter.svg';
import youtube from './assets/images/social-media-icons/youtube.svg';
import info from './assets/images/social-media-icons/info.svg';
import add from './assets/images/social-media-icons/add.svg';
import whatsapp from './assets/images/social-media-icons/whatsapp.svg';
import { connect } from 'react-redux'
import Logo from '../logo/logo';
import { Container, Button, Link } from 'react-floating-action-button'
import SectionHeadingfooter from '../../pages-component/section-heading-footer/section-heading-footer';
import ContactUsForm from '../../../pages/contact-us/components/contact-us-form/contact-us-form'
import Popupcontactus from '../../../pages/contact-us/components/contact-us-form/pop-contact-us-form'
import postGeneralQuery from '../../../services/api/post-general-query';
import postMediaQuery from '../../../services/api/post-media-query';
import postDistributorQuery from '../../../services/api/post-distributor-query';
import getQueryReport from '../../../services/api/get-queries-report'

import * as utilityFunctions from '../../../utility-functions/utility-functions';
import FormSuccessMsg from '../../../components/pages-component/form-success-msg/form-success-msg';

import Modal from '../../../components/ui/modal/modal';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.formData = new FormData();
    this.natureOfQuery = null;
    this.isStateRequired = false;
    this.allowStateField = false;
  }

  state = {
    showPopup: false,
    formValid: true,
    errorMsg: null,
    formSubmissionStart: false,
    showModal: false
  }

  showPopup = () => {
    this.setState({
      ...this.state,
      showPopup: true
    });
  }

  closePopup = () => {
    this.setState({
      ...this.state,
      showPopup: false
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClearningFormData = () => {
    this.formData.delete('name');
    this.formData.delete('email');
    this.formData.delete('contact_number');
    this.formData.delete('message');
    this.formData.delete('region');
    this.formData.delete('state');
  }

  resetProperties = () => {
    this.natureOfQuery = null;
    this.isStateRequired = false;
    this.allowStateField = false;
  }

  onSubmitCallBack = (data) => {
    if (data.status === 201) {
      document.querySelector(".form--contact-us-1").reset();
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

    switch (this.natureOfQuery) {
      case 'General Queries':
        postGeneralQuery(this.onSubmitCallBack, this.formData);
        break;
      case 'Become a reseller or distributor':
        postDistributorQuery(this.onSubmitCallBack, this.formData);
        break;
      case 'Media Queries':
        postMediaQuery(this.onSubmitCallBack, this.formData);
        break;

      default:
        alert('Something is wrong. Please try again.');
        this.setState({
          ...this.state,
          formSubmissionStart: false
        });
        break;
    }
  }

  onInputChange = (event) => {
    const inputFieldName = event.target.name;
    const targetValue = event.target.value;
    const targetType = event.target.type;
    switch (targetType) {
      case 'text':
        if (inputFieldName === 'name') {
          this.formData.delete('name');
          this.formData.append('name', targetValue);
        }
        else
          if (inputFieldName === 'contact_number') {
            const contactNo = targetValue;
            this.formData.delete('contact_number');
            this.formData.append('contact_number', contactNo);
          }
        break;

      case 'email':
        if (inputFieldName === 'email') {
          this.formData.delete('email');
          this.formData.append('email', targetValue);
        }
        break;

      case 'select-one':
        if (inputFieldName === 'natureOfQuery') {
          this.natureOfQuery = targetValue;
          if (targetValue === 'General Queries') {
            this.allowStateField = true;
          } else {
            this.allowStateField = false;
            this.isStateRequired = false;
          }
          // console.log('allowStateField', this.allowStateField, 'isStateRequired', this.isStateRequired);
        } else if (inputFieldName === 'region') {
          this.formData.append('region', targetValue);
          if (targetValue.toLowerCase() === 'india' && this.allowStateField === true) {
            this.isStateRequired = true;
            // console.log('allowStateField', this.allowStateField, 'isStateRequired', this.isStateRequired);
          } else {
            this.isStateRequired = false
            // console.log('allowStateField', this.allowStateField, 'isStateRequired', this.isStateRequired);
          }
        } else if (inputFieldName === 'state') {
          this.formData.append('state', targetValue);
        }
        break;

      case 'textarea':

        this.formData.delete('message');
        this.formData.append('message', targetValue);
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
    if (this.props.blog === true) {
      return null
    } else {
      return (
        <footer className="footer">
          <div className="container container--footer">
            <div className="footer-box">
              <div className="logo-col">
                <Logo url={logoWithName} width={80} height={95} id={"footer-logo"} />
                <div className="govt-initiative">
                  <img src={ces} alt="CES" className="ces-logo" height="60" />
                  <img src={makeInIndia} alt="Make In India" className="make-in-india-logo" height="40" />
                  <img src={startupIndia} alt="Startup India" className="startup-india-logo" height="25" />
                </div>
              </div>
              <div className="footer-col-divider" content="company-items">
                <div className="footer-title">Company</div>
                <ul className="links-list">
                  {/* <li className="link-item">
                  <NavLink to="/home" exact>Home</NavLink>
                </li> */}
                  <li className="link-item">
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to="/media">Media</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to="/covid">Covid-19 efforts</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to="/blogs">Blogs</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to="/careers">Careers</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-col-divider" content="product-items">
                <div className="footer-title">Products</div>
                <ul className="links-list">
                  {/* <li className="link-item">
                  <NavLink to='/products/ray'>Ray</NavLink>
                </li> */}
                  <li className="link-item">
                    <NavLink to='/products/halo'>Halo</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to='/products/pentagram'>Pentagram</NavLink>
                  </li>
                  <li className="link-item">
                    <NavLink to='/products/concrete'>Concrete 3D Printer</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-col-divider" content="social-media">
                <div className="footer-title">Connect with us</div>
                <ul className="links-list" type="social-media-list">
                  <li className="link-item link-item--social-media">
                    <a href="https://www.facebook.com/etherealmachines" target="_blank">
                      <img src={facebook} alt="Facebook" width="30" height="30" />
                    </a>
                  </li>
                  <li className="link-item link-item--social-media">
                    <a href="https://www.instagram.com/ethereal_machines/" target="_blank">
                      <img src={insta} alt="Instagram" width="30" height="30" />
                    </a>
                  </li>
                  <li className="link-item link-item--social-media">
                    <a href="https://twitter.com/etherealmachine" target="_blank">
                      <img src={twitter} alt="Twitter" width="30" height="30" />
                    </a>
                  </li>
                  <li className="link-item link-item--social-media">
                    <a href="https://www.linkedin.com/company/etherealmachines/" target="_blank">
                      <img src={linkedin} alt="Linkedin" width="30" height="30" />
                    </a>
                  </li>
                  <li className="link-item link-item--social-media">
                    <a href="https://www.youtube.com/channel/UCW8I3771Afa4v_KkATxw2EA" target="_blank">
                      <img src={youtube} alt="YouTube" width="30" height="30" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-col-divider" content="social-media">
                <div className="footer-title">Investor Relations</div>
                <a href="https://ethereal-website2020.s3-ap-southeast-1.amazonaws.com/static/Form+MGT-7_Ethereal+website+upload+copy_protected+(1).pdf" target="_blank">
                  <img src={pdf} alt="Facebook" width="30" height="30" />
                  <span>FY 19-20</span>
                </a>

              </div>

            </div>
            <div>
              <Container>
                <Link href="https://wa.me/+918792757504" className="popupequiry_button2"
                  tooltip="Whatsapp"
                  icon="far fa-sticky-note" >
                  <img src={whatsapp} alt="Linkedin" width="30" height="30" />
                </Link>
                <Button onClick={this.showPopup} className="popupequiry_button2"
                  tooltip="Enquiry"
                  icon="fas fa-user-plus" >
                  <img src={info} alt="Linkedin" width="30" height="30" />
                </Button>
                <Button className="popupequiry_button"
                  tooltip="Quick Contact!"
                  icon="fas fa-info"
                >
                  <img src={add} alt="Linkedin" width="30" height="30" />
                </Button>
              </Container>
            </div>


            {this.state.showPopup === true ?
              <div>
                <div className="popup_bg">
                  <div className="popup_container">

                    <div className="popup">
                      <div className="popup_closecontainer">
                        <img onClick={this.closePopup} className='quiz_close' src={close} />
                      </div>
                      <Modal show={this.state.showModal} clicked={this.closeModal}>
                        <FormSuccessMsg />
                      </Modal>

                      <SectionHeadingfooter className="popup_closecontainer" classValue={"u-text-center"} hasSubHeading subHeading={"Please fill your details to get in touch with us."} />
                      <Popupcontactus
                        onInputChange={this.onInputChange}
                        onSubmitHandler={this.onSubmitHandler}
                        formSubmissionStart={this.state.formSubmissionStart}
                        errorMsg={this.state.errorMsg}
                        natureOfQuery={this.natureOfQuery}
                        isStateRequired={this.isStateRequired}
                        showLoader={this.state.formSubmissionStart}
                      />

                    </div>
                  </div>
                </div>
              </div>
              : null
            }

            <div className="copyright-box">
              Copyright &copy; 2018. Ethereal Machines Pvt Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    blog: state.blog.contentOpen
  }
};

export default connect(mapStateToProps, null, null, { pure: false })(Footer)