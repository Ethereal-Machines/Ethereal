import React, { Component } from 'react'
import { connect } from'react-redux'
import FormControl from '../../../../components/pages-component/form-controls/components/form-control'
import '../../../../components/pages-component/button/button.css'
import * as actionType from '../../../../store/actions/action-type'
import * as utilityFunctions from '../../../../utility-functions/utility-functions'
import postMedia from '../../../../services/api/post-media'
import mediaUpdate from '../../../../services/api/media-update'
import ErrorBox from '../../../../components/pages-component/form/components/error-box';
import Loader from '../../../../components/ui/loader/loader';
import uuid from 'uuid'

class DesignFilesForm extends Component{

    state = {
        title: "",
        link:"",
        publisher:"",
        thumbnail:"",
        description:"",
        published_at:"",
        mediaId:'',
        id:uuid(),
        publish:false,
        formValid: true,
        errorMsg: null,
        formSubmissionStart: false,
    };
    
    componentDidMount(){
        if(this.props.mediaId){
            const filterMedia = this.props.mediaItems.filter((data) => data.id === this.props.mediaId);
            filterMedia.map((data) => (
                this.setState({
                    title: data.title,
                    link: data.link,
                    publisher: data.publisher,
                    thumbnail: data.thumbnail,
                    description: data.description,
                    published_at: data.published_at,
                    publish: data.publish,
                    id:data.id
                })
            ))
        }
    }

    submitCallBack = (data) => {
        let code =201, mediaData = this.onAddMedia()
        if(this.props.updateMedia){
            code = 200
        }
        if (data.status === code) {
            this.clearForm()
            this.props.closeModal()
            utilityFunctions.clearSelectField('.select-input');
            if(this.props.updateMedia){
                this.props.updateMedias(mediaData)
            }else{
                this.props.postMedia(mediaData)
            }
            this.setState({
                ...this.state,
                formValid: true,
                errorMsg: null,
                formSubmissionStart: false
            });
        }else if (data.response) {
                this.setState({
                    ...this.state,
                    formValid: false,
                    errorMsg: data.response.data,
                    formSubmissionStart: false
                });
            }else {
            const genericErrorMsg = { Error: ["Oops! Something went wrong, please try again."] };
            this.setState({
                ...this.state,
                formValid: false,
                errorMsg: genericErrorMsg,
                formSubmissionStart: false
            });
        }
    }

    onMediaSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            formSubmissionStart: true
        });
        const data = this.onAddMedia()
        if(this.props.updateMedia){
                mediaUpdate(this.submitCallBack,this.state.id, data)
        }else{
            if(data){
                postMedia(this.submitCallBack,data)
            }
        }
    };

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    onAddMedia = () => {
        const { title, link, publisher, thumbnail, description, published_at, publish,id } = this.state
        const mediaData = {
            title: title,
            link: link,
            publisher: publisher,
            thumbnail: thumbnail,
            description: description,
            published_at:published_at,
            publish: publish,
            id:id
        };
        return mediaData
    };

    clearForm = () => {
        this.setState({
            title: '',
            link: '',
            publisher: '',
            thumbnail: '',
            description: '',
            published_at: '',
            publish: false
        })
    }

    render(){
        
        return(
            <form onSubmit={this.onMediaSubmit}>
                <FormControl>
                    <label htmlFor="title">
                        title
                        <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the title"
                        className="input-element"
                        id="title"
                        value={this.state.title}
                        onChange={ e => this.handleInputChange(e)}
                        required={true}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="description">
                    description
                        <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter the media description"
                        className="input-element"
                        id="description"
                        value={this.state.description}
                        onChange={ e => this.handleInputChange(e)}
                        required={true}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="link">
                    Link
                        <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        name="link"
                        placeholder="Enter the Link name"
                        className="input-element"
                        id="link"
                        value={this.state.link}
                        onChange={ e => this.handleInputChange(e)}
                        required={true}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="file1">
                    Thumnail
                    </label>
                    <input
                        type="file"
                        name="file1"
                        className="input-element"
                        id="file1"
                        value={this.state.file1}
                        onChange={ e => this.handleInputChange(e)}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="file2">
                    AttachFile2
                    </label>
                    <input
                        type="file"
                        name="file2"
                        className="input-element"
                        id="fil2"
                        value={this.state.file2}
                        onChange={ e => this.handleInputChange(e)}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="file3">
                    AttachFile3
                    </label>
                    <input
                        type="file"
                        name="file3"
                        className="input-element"
                        id="file3"
                        value={this.state.file3}
                        onChange={ e => this.handleInputChange(e)}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="file4">
                    AttachFile4
                    </label>
                    <input
                        type="file"
                        name="file4"
                        className="input-element"
                        id="file4"
                        value={this.state.file4}
                        onChange={ e => this.handleInputChange(e)}
                    />
                </FormControl>
                <FormControl>
                    <label htmlFor="file5">
                    AttachFile5
                    </label>
                    <input
                        type="file"
                        name="file5"
                        className="input-element"
                        id="file5"
                        value={this.state.file5}
                        onChange={ e => this.handleInputChange(e)}
                    />
                </FormControl>
                
                <div style={{margin:5}}>
                    <input
                        type="checkbox"
                        name="publish"
                        id="publish"
                        onChange={ e => this.handleInputChange(e)}
                        checked={this.state.publish}
                    />{" "}<span><b>Publish</b></span>
                </div>
                { this.state.errorMsg ? <ErrorBox isRequired errorMsg={this.state.errorMsg} /> : null}
                { this.state.formSubmissionStart ? <Loader>Submitting your request...</Loader> : null }
                <button type="submit" className="form-btn" onClick={this.onAddMedia}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mediaItems: state.media.mediaItems
    };
};

const mapDispathcToProps = (dispatch) => {
    return{
        postMedia: (data) => {
            dispatch({
                type: actionType.POST_MEDIA_ITEMS,
                value: data
            })
        },
        updateMedias: (data) => {
            dispatch({
                type: actionType.UPDATE_MEDIA,
                value: data
            });
        },
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(DesignFilesForm)
