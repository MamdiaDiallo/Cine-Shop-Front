import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
/*
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search'
*/
import '../style/header.css'
import { Button } from 'react-bootstrap'

const Header = () => {
  /*  const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }
*/
    return (
        <Fragment>
            
                      
            <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
  
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button className="btn" id="login_btn">User</button>

        <Button style={{width: "3rem", height: "3rem", position:"relative"}}
        variant="outline-primary"
        className='rounded-circle'
        >
            
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{background:"red", color:"white" , fontSize:"1.5rem", position:'absolute', bottom:0, right:0, transform:"translate(25%,25%)"}}>3</div>
</Button>
    
      </div>
    </nav>


        </Fragment>
    )
}

export default Header