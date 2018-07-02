import React,{Component} from 'react';
import ProjectItems from '../ShowProjects/ProjectItems';
export default class Projects extends Component{
    ProjectToDelete(id){
        this.props.deleteProject(id);
    }
    render(){
        var projectsList=this.props.projects.map(project=>{
            return <ProjectItems ProjectToDelete={this.ProjectToDelete.bind(this)} key={project.id} ProjectList={project}/>
        });
        return(
            <div>
                <h3>Projects in Your repository</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Project Name</strong></td>
                            <td><strong>Technology Used</strong></td>
                            <td><strong>Delete</strong></td>
                        </tr>
                        
                        {projectsList}
                    </tbody>
                </table>
            </div>
        );
    }
}