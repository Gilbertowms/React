import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer.js'




class Teams extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get(this.dataSource).then((res) => {            
            this.setState({ teams: res.data });
        }).catch((err) => {
            console.log("Error on the Teams Component");
        });
    }


    
    componentWillUnmount() {



    }
    render() {
        return ( 
            <div>
            <MainContainer SideBar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1>             
            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((t, index) => {
                            return (
                                <tr>
                                    <td>{t.TeamName}</td>
                                    <td>
                                    {t.Projects.map((p, index) => {
                                        return (
                                        <ul>    
                                        <li key={index}>{p.ProjectName}</li>
                                        </ul>
                                        )
                                    })}
                                    </td>
                                    <td>{t.Employees.length} Employees</td>
                                    <td>{t.TeamLead.FirstName} {t.TeamLead.LastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </MainContainer>
      </div>            
        );
    }
}

export default Teams;