import React, { Component } from 'react'
import ErrorBox from '../../../../components/pages-component/form/components/error-box'
import Loader from '../../../../components/ui/loader/loader'
import '../../../../components/pages-component/button/button.css'
import FormControl from '../../../../components/pages-component/form-controls/components/form-control'
import { connect } from 'react-redux'
import loginUser from '../../../../services/api/login'
import {login} from '../../../../services/api/login-ims'
import * as actionType from '../../../../store/actions/action-type'
import * as utilityFunctions from '../../../../utility-functions/utility-functions';
import { SetToken, GetToken } from '../../../../helpers/token';
import { tokenVerify } from '../../../../services/api/login-ims'


class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        errorMsg: null,
        formSubmissionStart: false,
    };


    tokenVerifyCallback = (data) => {
        if (data.status === 200) {
            this.setState({ loginLoader: false });
            this.props.basic(data.data);
        } else {
            this.setState({ loginLoader: false });
            console.log(data.response)
        }
    }

    componentWillMount() {
        if (GetToken) {
            tokenVerify(this.tokenVerifyCallback, GetToken());
        } else {
            this.setState({ loginLoader: false })
        }
    }

    onSubmitLogin = (e) => {
        e.preventDefault()
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    loginCallback = (data) => {
        
        if (data.status === 200) {
//            console.log(data.data.is_superuser)  
            
            if (data.data.auth_token) {
                sessionStorage.setItem('jwt', data.data.token);

                this.props.loginUser()
                this.props.history.push("/");
                utilityFunctions.clearSelectField('.select-input');
                this.setState({
                    ...this.state,
                    errorMsg: null,
                    formSubmissionStart: false
                });

            }
            else {

                this.setState({ showLoader: false, errorMsg: '' });
                SetToken(data.data.token, 5);
                // this.props.basic(data.data.user);
                if (data.data.firstTime === 'false') {
                    this.props.history.push('/user/updatePassword');
                } else if ((data.data.approval === 'pending' || data.data.approval === null) && data.data.firstTime === 'true') {
                    this.props.history.push('/user/profile');
                } else if (data.data.firstTime === 'true' && data.data.approval === 'approved') {
                    if (data.data.group == 'user') {
                        console.log(data.data)
                        this.props.history.push('/dashboarduser');
                    }
                    else {
                        this.props.history.push('/dashboardadmin');
                    }
                    // this.props.login();

                    // if (!this.state.url || this.state.url === '/login') {
                    //     this.props.history.push('/dashboard');
                    // } else {
                    //     this.props.history.push(this.state.url);
                    // }
                }

            }

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
        if(this.state.username === 'ethereal' || this.state.username === 'Ethereal' )
         loginUser(this.loginCallback, data);
        else
        login(this.loginCallback, data);

    };

    render() {
        return (
            <form onSubmit={this.onSubmitLogin}>
                <FormControl>
                    <label htmlFor="username">
                        Username
                        <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter the username"
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
                        placeholder="Enter the password"
                        className="input-element"
                        id="password"
                        required={true}
                        value={this.state.password}
                        onChange={e => this.handleInputChange(e)}
                    />
                </FormControl>
                {this.state.errorMsg ? <ErrorBox isRequired errorMsg={this.state.errorMsg} /> : null}
                {this.state.formSubmissionStart ? <Loader>Submitting your request...</Loader> : null}
                <button className="form-btn" onClick={this.logedIn}>Login</button>
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

export default connect(null, mapDispatchToProps)(LoginForm)
