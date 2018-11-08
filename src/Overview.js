import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import ProjectsPanel from './ProjectsPanel.js'
import TeamsPanel from './TeamsPanel.js'
import EmployeesPanel from './EmployeesPanel.js'

class Overview extends Component {
  render() {
    let url = "https://fierce-refuge-54721.herokuapp.com/";
    return (
        <MainContainer SideBar={this.props.title}>
            <h1 className="page-header">Overview</h1>
            <div className="row">
                <div className="col-md-4">
                    <ProjectsPanel title="Projects" dataSource={url + "projects"} />
                </div>
                <div className="col-md-4">
                    <TeamsPanel title="Teams" dataSource={url + "teams"} />
                </div>
                <div className="col-md-4">
                    <EmployeesPanel title="Employees" dataSource={url + "employees"} />
                </div>
            </div>
        </MainContainer>
    );
  }
}

export default Overview;