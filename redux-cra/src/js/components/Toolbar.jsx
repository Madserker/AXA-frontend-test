import React from 'react';
import './stylesToolbar.css';
import gnome from './gnome.png'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  editHairFilters,
  editAgeFilters,
  addHairFilter,
  removeHairFilter,
  addProfessionFilter,
  removeProfessionFilter
} from '../actions/filtersActions'
import {fetchGnomesFilters, search } from '../actions/getActions'
import PropTypes from 'prop-types';


class Toolbar extends React.Component {

    expanded1 = false;
    expanded2 = false;
    expanded3 = false;


  getSliderValue(){
    var slider = document.getElementById("myRange");
    var show = document.getElementById("showSlider");
    show.innerHTML="<p id='showSlider'>"+slider.value+"</p>";

    this.props.editAgeFilters(slider.value)



  }
    
    showCheckboxes1() {
      var checkboxes1 = document.getElementById("checkboxes1");
      var checkboxes2 = document.getElementById("checkboxes2");
      var slider = document.getElementById("slider");

      if (!this.expanded1) {
        checkboxes1.style.display = "block";
        checkboxes2.style.display = "none";
        slider.style.display = "none";
        this.expanded2 = false;
        this.expanded1 = true;
        this.expanded3 = false;
      } else {
        checkboxes1.style.display = "none";
        this.expanded1 = false;
      }
    }
    showCheckboxes2() {
      var checkboxes1 = document.getElementById("checkboxes1");
      var checkboxes2 = document.getElementById("checkboxes2");
      var slider = document.getElementById("slider");

      if (!this.expanded2) {
        checkboxes2.style.display = "block";
        checkboxes1.style.display = "none";
        slider.style.display = "none";
        this.expanded2 = true;
        this.expanded1 = false;
        this.expanded3 = false;
      } else {
        checkboxes2.style.display = "none";
        this.expanded2 = false;
      }
    }

    showSlider() {
      var checkboxes1 = document.getElementById("checkboxes1");
      var checkboxes2 = document.getElementById("checkboxes2");
      var slider = document.getElementById("slider");

      if (!this.expanded3) {
        slider.style.display = "block";
        checkboxes1.style.display = "none";
        checkboxes2.style.display = "none";
        this.expanded2 = false;
        this.expanded1 = false;
        this.expanded3 = true;
      } else {
        slider.style.display = "none";
        this.expanded3 = false;
      }
    }




    handleChange= (event) => {
      if(event.target.checked == true){
        this.props.addHairFilter(this.props.hairFilters,event.target.value)
      }else{
        this.props.removeHairFilter(this.props.hairFilters,event.target.value)
      }
    }

    handleChangeProfessions = (event) => {
      if(event.target.checked == true){
        this.props.addProfessionFilter(this.props.professionFilters,event.target.value)
      }else{
        this.props.removeProfessionFilter(this.props.professionFilters,event.target.value)
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
    document.getElementById("checkboxes1").style.display = "none";
    document.getElementById("checkboxes2").style.display = "none";
    document.getElementById("slider").style.display = "none";
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
                    <input type="text" id="search" placeholder="Search.." name="search" onChangeText={()=>this.props.search(document.getElementById("search").value,this.props.allGnomes)} ></input>
                    <button type="submit" value="submit" onClick={()=>this.props.search(document.getElementById("search").value,this.props.allGnomes)}><i className="fa fa-search"></i></button>
            </div>
            <button className="openFilters" id="openButton" onClick={() => this.openNav()}>&#9776;</button>


            </div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>

                      <div class="multiselect">
                        <div class="selectBox1" onClick={()=>this.showCheckboxes1()}>
                        <button className="webButton">HAIR FILTERS</button>
                        <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes1">
                          <label for="Pink">
                            <input type="checkbox" value="Pink" id="Pink" onChange={ this.handleChange }/>Pink</label>
                          <label for="Black">
                            <input type="checkbox" value="Black" id="Black" onChange={ this.handleChange }/>Black</label>
                          <label for="Red">
                            <input type="checkbox" value="Red" id="Red" onChange={ this.handleChange }/>Red</label>
                          <label for="Gray">
                            <input type="checkbox" value="Gray" id="Gray" onChange={ this.handleChange }/>Gray</label>
                          <label for="Green">
                            <input type="checkbox" value="Green" id="Green" onChange={ this.handleChange }/>Green</label>
                        </div>
                      </div>
                      <div class="multiselect">
                        <div class="selectBox2" onClick={()=>this.showCheckboxes2()}>
                        <button className="webButton">PROFESSION FILTERS</button>
                        <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes2">
                          <label for="Stonecarver">
                            <input type="checkbox" id="Stonecarver" value="Stonecarver" onChange={ this.handleChangeProfessions }/>Stonecarver</label>
                          <label for="Metalworker">
                            <input type="checkbox" id="Metalworker" value="Metalworker" onChange={ this.handleChangeProfessions }/>Metalworker</label>
                          <label for="Red">
                            <input type="checkbox" id="Woodcarver" value="Woodcarver" onChange={ this.handleChangeProfessions }/>Woodcarver</label>
                          <label for="Gray">
                            <input type="checkbox" id="Grey" value="Tax inspector" onChange={ this.handleChangeProfessions }/>Tax inspector</label>
                          <label for="Green">
                            <input type="checkbox" id="Red" value="Sculptor" onChange={ this.handleChangeProfessions }/>Sculptor</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Baker" onChange={ this.handleChangeProfessions }/>Baker</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Carpenter" onChange={ this.handleChangeProfessions }/>Carpenter</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Gemcutter" onChange={ this.handleChangeProfessions }/>Gemcutter</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Butcher" onChange={ this.handleChangeProfessions }/>Butcher</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Prospector" onChange={ this.handleChangeProfessions }/>Prospector</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Smelter" onChange={ this.handleChangeProfessions }/>Smelter</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Miner" onChange={ this.handleChangeProfessions }/>Miner</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Tinker" onChange={ this.handleChangeProfessions }/>Tinker</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Mason" onChange={ this.handleChangeProfessions }/>Mason</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Tailor" onChange={ this.handleChangeProfessions }/>Tailor</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Cook" onChange={ this.handleChangeProfessions }/>Cook</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Potter" onChange={ this.handleChangeProfessions }/>Potter</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Medic" onChange={ this.handleChangeProfessions }/>Medic</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Marble Carver" onChange={ this.handleChangeProfessions }/>Marble Carver</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Blacksmith" onChange={ this.handleChangeProfessions }/>Blacksmith</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Brewer" onChange={ this.handleChangeProfessions }/>Brewer</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Leatherworker" onChange={ this.handleChangeProfessions }/>Leatherworker</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Mechanic" onChange={ this.handleChangeProfessions }/>Mechanic</label>
                            <label for="Green">
                            <input type="checkbox" id="Red" value="Farmer" onChange={ this.handleChangeProfessions }/>Farmer</label>
                        </div>
                        
                      </div>

                      <div class="multiselect">
                        <div class="selectBox3" onClick={()=>this.showSlider()}>
                        <button className="webButton">AGE</button>
                        <div class="overSelect"></div>
                        </div>
                        <div id="slider">
                        <div class="slidecontainer">
                        <p>older than:</p>
                          <input type="range" min="1" max="500" class="slider" id="myRange" onChange={()=>this.getSliderValue()}></input>
                          <p id="showSlider"></p>
                        </div>
                        </div>
                      </div>

                      <div class="multiselect">
                        <div class="selectBox4" onClick={()=>this.showSlider()}>
                        <button className="webButton">WEIGHT</button>
                        <div class="overSelect"></div>
                        </div>
                        <div id="slider">
                        <div class="slidecontainer">
                        <p>older than:</p>
                          <input type="range" min="1" max="500" class="slider" id="myRange" onChange={()=>this.getSliderValue()}></input>
                          <p id="showSlider"></p>
                        </div>
                        </div>
                      </div>

                      <div class="multiselect">
                        <div class="selectBox5" onClick={()=>this.showSlider()}>
                        <button className="webButton">HEIGHT</button>
                        <div class="overSelect"></div>
                        </div>
                        <div id="slider">
                        <div class="slidecontainer">
                        <p>older than:</p>
                          <input type="range" min="1" max="500" class="slider" id="myRange" onChange={()=>this.getSliderValue()}></input>
                          <p id="showSlider"></p>
                        </div>
                        </div>
                      </div>

                      {/* <button id="filtersButton" onClick={()=>this.props.fetchGnomesHairFilters(this.props.hairFilters,this.props.gnomes)}>Apply</button> */}
                      <button className="webButton" id="filtersButton" onClick={()=>this.props.fetchGnomesFilters(this.props.hairFilters,this.props.professionFilters,this.props.ageFilters,this.props.allGnomes)}>Apply</button>
                  </div>
            </div>




        )
    }
}



Toolbar.propTypes = {
  editHairFilters: PropTypes.func.isRequired,
  editAgeFilters: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  addHairFilter: PropTypes.func.isRequired,
  removeHairFilter: PropTypes.func.isRequired,
  addProfessionFilter: PropTypes.func.isRequired,
  removeProfessionFilter: PropTypes.func.isRequired,
  fetchGnomesFilters: PropTypes.func.isRequired,
  hairFilters: PropTypes.array.isRequired,
  gnomes: PropTypes.array.isRequired,
  allGnomes: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  hairFilters: state.filters.hairFilters,
  ageFilters: state.filters.ageFilters,
  professionFilters: state.filters.professionFilters,
  gnomes: state.gnomes.gnomes,
  allGnomes: state.gnomes.allGnomes,
})

export default connect(mapStateToProps, { search, editHairFilters,editAgeFilters,addHairFilter,removeHairFilter,addProfessionFilter,removeProfessionFilter, fetchGnomesFilters })(Toolbar);