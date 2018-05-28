import React,{Component} from 'react';
import uuid from 'uuid';

export default class AddProject extends Component{
    constructor(){
        super();
        this.state={
            newProject:{}
        };
    }
    defaultCategories=['Magento','Angular','React','Node','Other'];
    HandleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value==='')
            alert('title is required');
        else{
            this.setState({
                newProject:{
                    id:uuid.v4(),
                    name:this.refs.title.value,
                    tech:this.refs.category.value
                }
            },
            ()=>this.props.AddedProject(this.state.newProject)
        );
            this.refs.title.value='';
            this.refs.category.value='--- Please Choose Category ---';
        }
    }
    render(){
        let CategoryOptions=this.defaultCategories.map((categories,index)=>{
            return <option key={index} value={categories}>{categories}</option>;
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.HandleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type='text' ref='title'/>
                    </div>
                    <br/>
                    <div>
                        <label>Category</label><br/>
                        <select  ref='category'>
                        <option key='default'>--- Please Choose Category ---</option>
                        {CategoryOptions}
                        </select>
                    </div>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}