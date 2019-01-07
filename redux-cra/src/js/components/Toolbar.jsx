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
            <div className="topnav">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <img src={gnome} className="logo" alt=""></img>
            <a>
            BrastlewApp
            </a> 
            {/* <img src={gnome} className="logo"></img> */}




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

//     <div class="topnav">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//   <a class="active" href="#home">Home</a>
//   <a href="#about">About</a>
//   <a href="#contact">Contact</a>
//   <div class="search-container">
//     <form action="/action_page.php">
//       <input type="text" placeholder="Search.." name="search"></input>
//       <button type="submit"><i class="fa fa-search"></i></button>
//     </form>
//   </div>
// </div>
}