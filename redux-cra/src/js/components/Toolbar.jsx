import React from 'react';
import './styles.css';
import gnome from './gnome.png'
import {Link} from 'react-router-dom';


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
            <div className="topnav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <Link to="/" className="link">
                <img src={gnome} className="logo" alt=""></img>
                <a>
                BrastlewApp
                </a> 
            </Link>


            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <span className="openFilters" id="openButton">&#9776;</span>
            </div>
        )
    }
}