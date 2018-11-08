/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Gilberto Silva
* Student ID: 139.236.160
* Date: 11/02/2018
*
********************************************************************************/


import React, { Component } from 'react';
import Overview from './Overview.js';
import {Route, Switch} from 'react-router-dom';
import Projects from './Projects.js';
import Teams from './Teams.js';
import Employees from './Employees.js';
import NotFound from './NotFound.js';


class App extends Component {
  render() {

    let url = "https://fierce-refuge-54721.herokuapp.com/";    
    
    return ( 
      <Switch>
        
        <Route exact path='/' render={() => (
            <Overview title="Overview" dataSource={url} /> 
        )}/>
      
        <Route exact path='/projects' render={() => (
            <Projects title="Projects" dataSource={url + "projects"} />
        )}/>

        <Route exact path='/employees' render={() => (
            <Employees title="Employees" dataSource={url + "employees"} />
        )}/>

        <Route exact path='/teams' render={() => (
            <Teams title="Teams" dataSource={url + "teams"} />
        )}/>
      
        <Route render={() => (
            <NotFound title="Not Found" />
        )}/>
      </Switch>      

    ); 
  }
}

export default App;