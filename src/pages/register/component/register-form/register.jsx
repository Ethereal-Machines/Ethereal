import React, { Component } from 'react'
import ErrorBox from '../../../../components/pages-component/form/components/error-box'
import Loader from '../../../../components/ui/loader/loader'
import '../../../../components/pages-component/button/button.css'
import FormControl from '../../../../components/pages-component/form-controls/components/form-control'
import { connect } from 'react-redux'
import registerUser from '../../../../services/api/register'
import * as actionType from '../../../../store/actions/action-type'
import * as utilityFunctions from '../../../../utility-functions/utility-functions';
import TextArea from '../../../../components/pages-component/form-controls/text-area';
import Select from '../../../../components/pages-component/form-controls/select';

class RegisterForm extends Component {

    state = {
        username: '',
        password: '',
        errorMsg: null,
        formSubmissionStart: false,
    };

    onSubmitLogin = (e) => {
        e.preventDefault()
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    loginCallback = (data) => {
        if (data.status === 200) {
            sessionStorage.setItem('jwt', data.data.auth_token);
            this.props.loginUser()
            this.props.history.push("/");
            utilityFunctions.clearSelectField('.select-input');
            this.setState({
                ...this.state,
                errorMsg: null,
                formSubmissionStart: false
            });
        } else if (data.response) {
            this.setState({
                ...this.state,
                errorMsg: data.response.data,
                formSubmissionStart: false
            });
        } else {
            const genericErrorMsg = { Error: ["Oops! Something went wrong, please try again."] };
            this.setState({
                ...this.state,
                errorMsg: genericErrorMsg,
                formSubmissionStart: false
            });
        }
    };

    logedIn = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        registerUser(this.loginCallback, data);
    };

    render() {

        const usertype = [
            { id: 1, value: 'General Queries' },
            { id: 2, value: 'Become a reseller or distributor' },
            { id: 3, value: 'Media Queries' },
        ];

        return (
            <form onSubmit={this.onSubmitLogin}>
                <FormControl>
                    <label htmlFor="usertype">
                        User Type
                        <span className="star">*</span>
                    </label>
                    <Select
                        id="usertype"
                        name="usertype"
                        placeholder="select the User type"
                        className="input-element"
                        options={usertype} defaultValue={"select the user Type"}
                        required={true}
                        onChange={e => this.handleInputChange(e)}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="userFullname">
                        Full Name
                    <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="userFullname"
                        placeholder="Enter the Full Name"
                        className="input-element"
                        id="userFullname"
                        required={true}
                        value={this.state.userFullname}
                        onChange={e => this.handleInputChange(e)}
                    />

                </FormControl>

                <FormControl>
                    <label htmlFor="phoneNumber">
                        Phone Number
                    <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter the Phone Number"
                        className="input-element"
                        id="phoneNumber"
                        required={true}
                        value={this.state.phoneNumber}
                        onChange={e => this.handleInputChange(e)}
                    />

                </FormControl>

                <FormControl>
                    <label htmlFor="username">
                        Email ID
                        <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter the User Email"
                        className="input-element"
                        id="username"
                        required={true}
                        value={this.state.username}
                        onChange={e => this.handleInputChange(e)}
                    />

                </FormControl>

                <FormControl>
                    <label htmlFor="password">
                        Password
                        <span className="star">*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter the Password"
                        className="input-element"
                        id="password"
                        required={true}
                        value={this.state.password}
                        onChange={e => this.handleInputChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <label htmlFor="password">
                        Confirm Password
                        <span className="star">*</span>
                    </label>
                    <input
                        type="password"
                        name="confirmpassword"
                        placeholder="Re-enter the Password"
                        className="input-element"
                        id="confirmpassword"
                        required={true}
                        value={this.state.confirmpassword}
                        onChange={e => this.handleInputChange(e)}
                    />
                </FormControl>

                <FormControl>
                    <label htmlFor="userCompany">
                        Company Name
                        <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="userCompany"
                        placeholder="Enter the Company Name"
                        className="input-element"
                        id="userCompany"
                        required={true}
                        value={this.state.userCompany}
                        onChange={e => this.handleInputChange(e)}
                    />

                </FormControl>
                <FormControl>
                    <label htmlFor="userAddress">
                        Address
                        <span className="star">*</span>
                    </label>
                    {/* <TextArea 
                    labelName={"Specific Queries"} 
                    inputName={"specificQueries"} 
                    placeholder={"Add details about product/design/type of machining"}  
                    {...this.props} /> */}
                    <TextArea
                        name="userAddress"
                        placeholder="Enter the Address"
                        className="input-element"
                        id="userAddress"
                        required={true}
                        value={this.state.userAddress}
                        onChange={e => this.handleInputChange(e)}
                    />
                </FormControl>


                {this.state.errorMsg ? <ErrorBox isRequired errorMsg={this.state.errorMsg} /> : null}
                {this.state.formSubmissionStart ? <Loader>Submitting your request...</Loader> : null}
                <button className="form-btn" onClick={this.logedIn}>Register</button>
                <button className="form-btn-scl" onClick={console.log("called")}>Register using Facebook or google</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => {
            dispatch({
                type: actionType.LOGIN,
            })
        }
    }

}

export default connect(null, mapDispatchToProps)(RegisterForm)
