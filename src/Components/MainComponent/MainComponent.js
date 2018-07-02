import React,{Component} from 'react';
import Header from '../Header/Header';
export default class MainComponent extends Component{
    render(){
        return(
            <div>
                <div className="ProjectManager">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to Project Manager</h1>
                        <Header/>
                    </header>
                </div>
                <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {this.props.children}
                </div>
            </div>
            </div>
        );
    }
}