/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { createHashHistory } from 'history';
import { connect } from 'react-redux'

import loader from '../assets/images/loader/loader.gif';

import { GetToken } from '../helpers/token'
import LoginChecker from '../pages/login/login-checker'
// import Login from '../login-ims/login'

const Loading = () => {
  return (
    <div className="page">
      <div className="page-loader u-text-center">
        <img src={loader} alt="Loader" height="100" />
        <p className="u-text-center">LOADING...</p>
      </div>
    </div>
  );
};

const Home = Loadable({
  loader: () => import('../pages/home/home'),
  loading: Loading
});
const Halo = Loadable({
  loader: () => import('../pages/products/ethereal-halo/ethereal-halo.jsx'),
  loading: Loading
});
const Ray = Loadable({
  loader: () => import('../pages/products/ethereal-ray/ethereal-ray.jsx'),
  loading: Loading
});
const updatePassword = Loadable({
  loader: () => import('../update-password/update-password'),
  loading: Loading
});
const CreateProfile = Loadable({
  loader: () => import('../create-profile/create-profile'),
  loading: Loading
});




const Pentagram = Loadable({
  loader: () => import('../pages/products/ethereal-pentagram/ethereal-pentagram.jsx'),
  loading: Loading
});
const Concrete = Loadable({
  loader: () => import('../pages/products/ethereal-concrete/ethereal-concrete'),
  loading: Loading
})
const About = Loadable({
  loader: () => import('../pages/about/about'),
  loading: Loading
});
const Media = Loadable({
  loader: () => import('../pages/media/media'),
  loading: Loading
});
const DesignFiles = Loadable({
  loader: () => import('../pages/designfiles/designfiles'),
  loading: Loading
});
const Careers = Loadable({
  loader: () => import('../pages/careers/careers'),
  loading: Loading
});
const Apply = Loadable({
  loader: () => import('../pages/careers/components/apply/apply.jsx'),
  loading: Loading
})
const ContactUs = Loadable({
  loader: () => import('../pages/contact-us/contact-us'),
  loading: Loading
});
const DesignHelp = Loadable({
  loader: () => import('../pages/design-help/design-help'),
  loading: Loading
});
const Covid = Loadable({
  loader: () => import('../pages/covid/covid'),
  loading: Loading
});
const Blogs = Loadable({
  loader: () => import('../pages/blogs/blog'),
  loading: Loading
});
const BlogPage = Loadable({
  loader: () => import('../pages/blogs/components/blog-page/blog-page'),
  loading: Loading
})
const BlogsCreate = Loadable({
  loader: () => import('../pages/blogs/components/create-blog/create-blog'),
  loading: Loading
})
const BlogsEditor = Loadable({
  loader: () => import('../pages/blogs/components/create-blog/blog-content-editor/blog-editor'),
  loading: Loading
})
const LoginAsAdmin = Loadable({
  loader: () => import('../pages/login/login'),
  loading: Loading
});
const Loginasims = Loadable({
  loader: () => import('../login-ims/login'),
  loading: Loading
});
const register = Loadable({
  loader: () => import('../pages/register/register'),
  loading: Loading
});
const Dashboard = Loadable({
  loader: () => import('../pages/dashboard/dashboard'),
  loading: Loading
})
const ErrorPage = Loadable({
  loader: () => import('../pages/error-page/error-page'),
  loading: Loading
});



// new Routes


// user component use suffix User

const UserDashboard = Loadable({
  loader: () => import('../distributor/pages/dashboard/dashboard'),
  loading: Loading
});

const UserAddNew = Loadable({
  loader: () => import('../distributor/pages/issues/new/isuue-form'),
  loading: Loading
});

// const UserPendingIssues = Loadable({
//     loader: () => import('../distributor/pages/issues/pending/pending-issue'),
//     loading: Loading
// });

// const UserPendingIssueChat = Loadable({
//     loader: () => import('../distributor/pages/issues/pending/pending-issue-chat/pending-issue-chat'),
//     loading: Loading
// });

// const UserResolvedIssue = Loadable({
//     loader: () => import('../distributor/pages/issues/resolved/resolved-issue'),
//     loading: Loading
// });

// const UserResolvedIssueChat = Loadable({
//     loader: () => import('../distributor/pages/issues/resolved/resolved-issue-chat/resolved-issue-chat'),
//     loading: Loading
// });

const Agreement = Loadable({
  loader: () => import('../distributor/pages/resources/agreement/agreement'),
  loading: Loading
})

const Certificate = Loadable({
  loader: () => import('../distributor/pages/resources/certificate/certificate'),
  loading: Loading
})

const Videos = Loadable({
  loader: () => import('../distributor/pages/resources/videos/videos'),
  loading: Loading
})

const Manuals = Loadable({
  loader: () => import('../distributor/pages/resources/manuals/manuals'),
  loading: Loading
})

// const UserShopping = Loadable({
//     loader: () => import('../distributor/pages/shopping/shopping'),
//     loading: Loading
// });

// const UserShoppingDetail = Loadable({
//     loader: () => import('../distributor/pages/shopping/shopping-detail/shopping-detail'),
//     loading: Loading
// });

const UserFaqs = Loadable({
  loader: () => import('../distributor/pages/faq/faq'),
  loading: Loading
});

// user component use suffix User

const AdminDashboard = Loadable({
  loader: () => import('../admin/pages/dashboard/dashboard'),
  loading: Loading
});

const Vendors = Loadable({
  loader: () => import('../admin/pages/vendors/vendors'),
  loading: Loading
})

const CreateUser = Loadable({
  loader: () => import('../admin/pages/users/create-user/create-user'),
  loading: Loading
});

const UsersList = Loadable({
  loader: () => import('../admin/pages/users/user-list/users'),
  loading: Loading
});

const Orders = Loadable({
  loader: () => import('../admin/pages/orders/orders'),
  loading: Loading
});

const ProductCatalogue = Loadable({
  loader: () => import('../admin/pages/product_catalogue/product_catalogue'),
  loading: Loading
});

const Resource = Loadable({
  loader: () => import('../pages/resource/resource'),
  loading: Loading
});





class Routes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  history = createHashHistory({
    basename: "", // The base URL of the app (see below)
    hashType: "slash", // The hash type to use (see below)
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message)),
  });

  render() {
    return (
      <Router history={this.history}>
        <Switch>
          {/* <Route path="/loginasims" exact component={Loginasims} /> */}
          <Route path="/error-page" component={ErrorPage} />
          <Route path="/about" component={About} />
          <Route path="/media" component={Media} />
          <Route path="/covid" component={DesignFiles} />
          {/* <Route path="/covid" component={Covid} /> */}
          <Route path="/login" component={LoginAsAdmin} />
          
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/dashboard" render={() => (
            !sessionStorage.jwt ? (
              <Redirect to="/" />
            ) : (
                <Dashboard />
              )
          )}
          />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/blog/:id" exact component={BlogPage} />
          <Route path="/blogs/create" exact render={() => (
            !sessionStorage.jwt ? (
              <Redirect to="/" />
            ) : (
                <BlogsCreate />
              )
          )} />
          <Route path="/blogs/create/content/:id" render={() => (
            !sessionStorage.jwt ? (
              <Redirect to="/" />
            ) : (
                <BlogsEditor />
              )
          )} />
          <Route path="/products/halo" component={Halo} />
          <Route path="/products/ray" component={Ray} />
          <Route path="/products/pentagram" component={Pentagram} />
          <Route path="/products/concrete" component={Concrete} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/DesignHelp" component={DesignHelp} />
          <Route path="/careers" exact component={Careers} />
          <Route path="/careers/apply/:id" component={Apply} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/user/updatePassword" exact component={updatePassword} />
          <Route path="/user/profile" exact component={CreateProfile} />
         
          <Route path="/issues/new" exact component={UserAddNew} />
          <Route path="/resources/videos" exact component={Videos} />
          <Route path="/resources/certificate" exact component={Certificate} />
          <Route path="/resources/aggrement" exact component={Agreement} />
          <Route path="/resources/manuals" exact component={Manuals} />
          <Route path="/faqs" exact component={UserFaqs} />
          <Route path="/dashboarduser" exact component={UserDashboard} />
          
          <Route path="/dashboardadmin" exact component={AdminDashboard} />
          <Route path="/users/new" exact component={CreateUser} />
          <Route path="/users/users-list" exact component={UsersList} />
          <Route path="/product-catalog" exact component={ProductCatalogue} />
          <Route path="/vendors" exact component={Vendors} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/resource" exact component={Resource} />


          {/* <Route path="/user/profile" render={(match) => (
            this.props.isFirst && GetToken() && (this.props.isApproved === null || this.props.isApproved === 'approved')
              ? <CreateProfile />
              : <Redirect to="/" />
          )} /> */}
          {/* <Route path="/login" component={Login}/> */}
          <LoginChecker>

            {this.props.is_superuser === 'false'

              ?
              <Switch>
                <Route path="/issues/new" exact component={UserAddNew} />
                <Route path="/resources/videos" exact component={Videos} />
                <Route path="/resources/certificate" exact component={Certificate} />
                <Route path="/resources/aggrement" exact component={Agreement} />
                <Route path="/resources/manuals" exact component={Manuals} />
                <Route path="/faqs" exact component={UserFaqs} />
                <Route path="/dashboard" exact component={UserDashboard} />
              </Switch>

              :
              <Switch>
                <Route path="/dashboard" exact component={AdminDashboard} />
                <Route path="/users/new" exact component={CreateUser} />
                <Route path="/users/users-list" exact component={UsersList} />
                <Route path="/product-catalog" exact component={ProductCatalogue} />
                <Route path="/vendors" exact component={Vendors} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/resource" exact component={Resource} />
              </Switch>
            }




          </LoginChecker>

          <Redirect to="/error-page" />
        </Switch>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    isFirst: state.Basic.basic.firstTime,
    isApproved: state.Basic.basic.approval,
    userType: state.Basic.basic.group
  }
}

// export default Routes;

export default connect(mapStateToProps)(Routes)
