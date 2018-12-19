import React from 'react';
import './styles.css';
import gnome from './gnome.png'


export default class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
    }

    render(){
        return(
            <div className="toolbar">
            <img src={gnome} className="logo"></img>
            <p>
            BrastlewApp
            </p> 
            <img src={gnome} className="logo"></img>
            </div>
        )
    }
}