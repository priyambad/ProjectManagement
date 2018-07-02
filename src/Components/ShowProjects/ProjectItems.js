import React,{Component} from 'react';
// import ShowProject from'./ShowProject';
export default class ProjectItems extends Component{
    deleteProject(id){
        this.props.ProjectToDelete(id)
    }
    render(){
        return (
                <tr key={this.props.ProjectList.id}>
                    <td><strong>{this.props.ProjectList.name}</strong></td>
                    <td>{this.props.ProjectList.tech}</td>
                    <td><a href='#' onClick={this.deleteProject.bind(this,this.props.ProjectList.id)}>X</a></td>
                </tr>
        );
    }
    
}