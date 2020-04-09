/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
var flag = false
const navItem = (props) => {
  let item;
  if (props.linkType === 'text') {
    item = props.name;
  } else if (props.linkType === 'img') {
    item = <img src={props.img.url} alt={props.img.alt} width={props.img.width} height={props.img.height} className="avatar" />;
  }
  

  return (
    
    <li className="nav-item" onClick={props.closeNavBar}>
      <div className="item-name flex-row">
        {
          props.navLink ?
            <NavLink to={props.address} id={props.address} className="item-link" onClick={() => {
              document.getElementById("product-sub-list").style.overflow = "hidden"
              document.getElementById("/about").style.marginTop = "0px"
              document.getElementById("product-sub-list").style.zIndex = "0" 
              flag = false
            }}>
              {props.name}
            </NavLink> :
            <a className={props.showActive ? 'item-link active' : 'item-link'} type="no-click" onClick={() => {
              if (flag == false) {
                flag = true
                document.getElementById("product-sub-list").style.visibility = "visible"
                document.getElementById("product-sub-list").style.overflow = "visible"
                document.getElementById("product-sub-list").style.position = "inherit" 
                document.getElementById("product-sub-list").style.zIndex = "10" 
                document.getElementById("/about").style.marginTop = "220px"
              }
              else
              {
                flag = false
                document.getElementById("product-sub-list").style.overflow = "hidden"
                document.getElementById("/about").style.marginTop = "0px"
                
              }

            }}>{item}</a>
            
        }

         {
          props.navLink ==="user"
          ? 
          
          <a className={props.showActive ? 'item-link active' : 'item-link'} type="no-click" onClick={() => {
            if (flag == false) {
              flag = true
              document.getElementById("user-sub-list").style.visibility = "visible"
              document.getElementById("user-sub-list").style.overflow = "visible"
              document.getElementById("user-sub-list").style.position = "inherit" 
              document.getElementById("user-sub-list").style.zIndex = "10"
            }
            else
            {
              flag = false
              document.getElementById("user-sub-list").style.overflow = "hidden"
              
            }

          }}>{item}</a>
          : null
        }
      </div>
      {props.children}
    </li>
  );
};

export default navItem;