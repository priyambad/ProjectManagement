import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component{
    render(){
        return (
            <ul>
                <li><Link to={"/myproject"} activeStyle={{color: "red"}}>My Projects</Link></li>
                <li><Link to={"/mytodo"} activeStyle={{color: "red"}}>My To Do's</Link></li>
            </ul>
        )
    }
}