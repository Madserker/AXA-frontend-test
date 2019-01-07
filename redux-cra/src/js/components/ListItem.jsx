import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <Link to={"/details/" + this.props.gnome.id}>
            <div>
                <img className="image" src={this.props.gnome.thumbnail} alt=""></img>
                <div className="infoDiv">
                <p>{this.props.gnome.name}</p>
                </div>
            </div>
            </Link>
        )
    }
}