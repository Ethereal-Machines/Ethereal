 

import { combineReducers } from 'redux';
import loginims from './loginims';
import basic from './basic';
import company from './company';
import users from './users';
import products from './product_catalog';
import orders from './orders'
import media from './media-items';
import jobs from './job-items';
import team from './team-items';
import login from './login'
import blog from './blog-items'
import gallary from './gallary'

const rootReducer = combineReducers({
    loginims : loginims,
    Basic: basic,
    Company: company,
    Users: users,
    Products: products,
    Orders: orders,
    media: media,
    jobs: jobs,
    team: team,
    login: login,
    blog: blog,
    gallary: gallary
});

export default rootReducer