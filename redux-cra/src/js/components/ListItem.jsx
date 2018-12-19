import React from 'react';
import './styles.css';

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <img className="image" src={this.props.gnome.thumbnail}></img>
                <div className="infoDiv">
                <p>{this.props.gnome.name}</p>
                </div>
            </div>
        )
    }
}