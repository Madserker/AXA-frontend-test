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




    expanded = false;

    showCheckboxes() {
      var checkboxes = document.getElementById("checkboxes");
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
    }



    componentDidMount(){
    }

/* Set the width of the side navigation to 250px */

  openNav() {
    document.getElementById("mySidenav").style.height = "10%";
    document.getElementById("gnomesList").style.marginTop  = "150px";

  }
  
  /* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("gnomesList").style.marginTop = "80px";
  }

    render(){
        return(
            <div>
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
            <button className="openFilters" id="openButton" onClick={() => this.openNav()}>&#9776;</button>


            </div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>

                      <div class="multiselect">
                        <div class="selectBox" onClick={()=>this.showCheckboxes()}>
                          <select>
                          <option value="" disabled selected>Hair Color</option>
                          </select>
                        <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes">
                          <label for="Pink">
                            <input type="checkbox" id="Pink" />Pink</label>
                          <label for="Black">
                            <input type="checkbox" id="Black" />Black</label>
                          <label for="Red">
                            <input type="checkbox" id="Red" />Red</label>
                          <label for="Gray">
                            <input type="checkbox" id="Grey" />Gray</label>
                          <label for="Green">
                            <input type="checkbox" id="Red" />Green</label>
                        </div>
                      </div>
                      <button id="filtersButton" onClick={()=>this.closeNav()}>Apply</button>
                  </div>
            </div>




        )
    }
}