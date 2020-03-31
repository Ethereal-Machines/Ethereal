/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './designfiles-item.css';

import calendarIcon from '../../assets/images/calendar-icon.svg';
import Tag from '../../assets/images/tag.png';

const DesignFilesItem = (props) => {
  var file2 = 'file1'
  var file4 = 'file2'
  var file3 = 'file3'
  var file5 = 'file4'
  if (props.item.file5 !== null) {
    var str = props.item.file5;
    var res = str.split('/')
    var n = res.length
    file5 = res[n - 1];
  }

  if (props.item.file2 !== null) {
    var str = props.item.file2;
    var res = str.split('/')
    var n = res.length
    file2 = res[n - 1];
  }
  if (props.item.file3 !== null) {
    var str = props.item.file3;
    var res = str.split('/')
    var n = res.length
    file3 = res[n - 1];
  }
  if (props.item.file4 !== null) {
    var str = props.item.file4;
    var res = str.split('/')
    var n = res.length
    file4 = res[n - 1];
  }
  const imgContainerStyle = {
    backgroundImage: `url(${props.item.file1})`
  };

  return (
    <div className="media-item flex-row">
      <div className="media-image-container">
        <img src={props.item.file1} alt="Media" />
      </div>
      <div className="media-details-container">
        <div className="media-title subtitle">
          <span>{props.item.title}</span>
        </div>
        <div className="media-date-publisher flex-row">
          <span className="media-publisher">
            {props.item.description}
          </span>
          {/* <span className="media-date">
            <img src={calendarIcon} alt="Calendar" width="16" height="16" className="icon"/>
            <span>Published On:</span>ssf
            <span>{props.item.published_at}</span>
          </span> */}
        </div>
        {/* <div className="media-description">{props.item.description}</div> */}


        
            <div className="media-link">
              <ul className="display-list">
                {
                  props.item.link
                    ?
                    <li>
                      <form target="_blank" action={props.item.link}>
                        <button className="button">View link attached</button>
                      </form>
                    </li>
                    : null
                }
        {
          props.session
            ?
            <div>
                <li>
                  <a onClick={() => props.onUpdate(props.item.id)}>Update</a>
                </li>
                
                {/* <li>
                  {
                    props.item.public
                      ?
                      <a onClick={() => props.unpublishMedia(props.item.id, false)} >UnPublish</a>
                      :
                      <a onClick={() => props.publishMedia(props.item.id, true)} >Publish</a>
                  }
                </li> */}

                <li>
                  <button className="button" onClick={() => props.deleteMedia(props.item.id)}>Delete</button>
                </li>
            </div>
                
                : null
                }
              </ul>
            </div>

            
            // <div className="media-link">
            //   <a href={props.item.link} target="_blank">View More</a>
            // </div>
        
      </div>

      <div align="left" style={{ width: '40%' }}>
        <div className="media-title subtitle">
          <span>Download</span>
        </div>
        {
          props.item.file2
            ?
            <form target="_blank" action={props.item.file2}>
              <button className="button">{file2}</button>
            </form>
            : null
        }

        {
          props.item.file3
            ?

            <form target="_blank" action={props.item.file3}>
              <button className="button">{file3}</button>
            </form>

            : null
        }
        {
          props.item.file4
            ?

            <form target="_blank" action={props.item.file4}>
              <button className="button">{file4}</button>
            </form>

            : null
        }
        {
          props.item.file5
            ?

            <form target="_blank" action={props.item.file5}>
              <button className="button">Download {file5}</button>
            </form>

            : null
        }


      </div>
    </div>
  );
};

export default DesignFilesItem;
