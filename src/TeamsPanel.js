import React from 'react';
import axios from 'axios';


class TeamsPanel extends React.Component{
    
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
        
    }
    
    componentDidMount(){
        axios.get(this.dataSource).then((res)=>{
            this.setState({teams: res.data});
        }).catch((err) => {
            console.log("Error on TeamsPanel component");
        });
    }
    
    componentWillUnmount() {}
    
    render(){
        return(
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"><b>{this.props.title}</b></h3>
            </div>
            <div className="panel-body">
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            {this.state.teams.map((team, index) => {
                            return (
                                <tr>
                                    <td>{team.TeamName}</td>
                                    <td>{team.Employees.length} Employees</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
                <a href='/teams' className="btn btn-primary form-control">View All Team Data</a>
            </div>
        </div>
        )
    }
}

export default TeamsPanel;