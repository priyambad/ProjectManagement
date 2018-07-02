import React,{Component} from 'react';
import AddProject from '../AddProject/AddProject';
import Projects from './Projects';
import uuid from 'uuid';
import './MainComponentStyle.css'
export default class MainProject extends Component{

    constructor(){
        super();
        this.state={
            projects:[]
        };
    }
    componentWillMount(){
        this.setState({
            projects:[
                {
                    id:uuid.v4(),
                    name:'SGLibre',
                    tech:'magento',
                },
                {
                    id:uuid.v4(),
                    name:'LeVMs',
                    tech:'Angular',
                }
             ]
        });
    }
    addNewProject(data){
        let newProjectAdded =this.state.projects.push(data);
        this.setState({
            newProjectAdded
        });
    }
    deleteProject(id){
        let Projects=this.state.projects;
        let index=Projects.findIndex(x =>x.id === id)
        Projects.splice(index,1);
        this.setState({
            Projects
        });
    }
    render(){
        return (
            <div>
                <div className="mainComponent">
                    <AddProject AddedProject={this.addNewProject.bind(this)}/>
                    <Projects deleteProject={this.deleteProject.bind(this)} projects={this.state.projects}/>
                </div>
            </div>
        );
    }
}