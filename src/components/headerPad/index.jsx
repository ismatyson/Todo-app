import React, { Component } from 'react';
import logo from '../../assets/Assets_IB_logo.png'
import NewTask from '../UI/newTaskModal/index'
import Sort from '@material-ui/icons/Sort'

const HeaderPad = ({addTask}) =>{
        return (
            <nav className="navbar navbar-light bg-white">
            <div className="container-fluid">
              <a className="navbar-brand"><img src={logo} alt="" width="32" height="30"/></a>
             
              <form className="form-inline my-2 my-lg-0">
                <div className="row m-2">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-dark" type="submit">Search</button>
                </div>
              </form>
              
              <button className="btn btn-outline-dark m-2">
                  <Sort fontSize="small"/>
              </button>
              <NewTask 
               addTask={addTask}
              />
            
            </div>
          </nav>
        );

       
}

export default HeaderPad;