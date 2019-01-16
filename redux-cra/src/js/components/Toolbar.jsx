import React from 'react';
import './stylesToolbar.css';
import gnome from './gnome.png'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  editHairFilters,
  editAgeFilters,
  editHeightFilters,
  editWeightFilters,
  addHairFilter,
  removeHairFilter,
  addProfessionFilter,
  removeProfessionFilter
} from '../actions/filtersActions'
import {fetchGnomesFilters, search } from '../actions/getActions'
import PropTypes from 'prop-types';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';


class Toolbar extends React.Component {


    expanded1 = false;
    expanded2 = false;
    expanded3 = false;
    expanded4 = false;
    expanded5 = false;

    opened = false;

//close all
closeAll(){
  var checkboxes1 = document.getElementById("checkboxes1");
  var checkboxes2 = document.getElementById("checkboxes2");
  var slider = document.getElementById("slider");
  var slider2 = document.getElementById("slider2");
  var slider3 = document.getElementById("slider3");
  this.expanded1 = false;
  this.expanded2 = false;
  this.expanded3 = false;
  this.expanded4 = false;
  this.expanded5 = false;
  checkboxes1.style.display = "none";
  checkboxes2.style.display = "none";
  slider.style.display = "none";
  slider2.style.display = "none";
  slider3.style.display = "none";
}



  getSliderValue(){
    var slider = document.getElementById("myRange");
    var show = document.getElementById("showSlider");
    show.innerHTML="<p id='showSlider'>"+slider.value+"</p>";
    this.props.editAgeFilters(slider.value)
    this.props.fetchGnomesFilters(
      this.props.hairFilters,
      this.props.professionFilters,
      this.props.ageFilters,
      this.props.weightFilters,
      this.props.heightFilters,
      this.props.allGnomes)
  
  }
  getSlider2Value(){
    var slider = document.getElementById("myRange2");
    var show = document.getElementById("showSlider2");
    show.innerHTML="<p id='showSlider2'>"+slider.value+"</p>";
    this.props.editWeightFilters(slider.value)
    this.props.fetchGnomesFilters(
      this.props.hairFilters,
      this.props.professionFilters,
      this.props.ageFilters,
      this.props.weightFilters,
      this.props.heightFilters,
      this.props.allGnomes)
  
  }
  getSlider3Value(){
    var slider = document.getElementById("myRange3");
    var show = document.getElementById("showSlider3");
    show.innerHTML="<p id='showSlider3'>"+slider.value+"</p>";
    this.props.editHeightFilters(slider.value)
    this.props.fetchGnomesFilters(
      this.props.hairFilters,
      this.props.professionFilters,
      this.props.ageFilters,
      this.props.weightFilters,
      this.props.heightFilters,
      this.props.allGnomes)
  
  }
    
    showCheckboxes1() {
      var checkboxes1 = document.getElementById("checkboxes1");
      if (!this.expanded1) {
        this.closeAll();
        this.expanded1 = true;
        checkboxes1.style.display = "block";
      } else {
        checkboxes1.style.display = "none";
        this.expanded1 = false;
      }
    }
    showCheckboxes2() {
      var checkboxes2 = document.getElementById("checkboxes2");
      if (!this.expanded2) {
        this.closeAll();
        checkboxes2.style.display = "block";
        this.expanded2 = true;
      } else {
        checkboxes2.style.display = "none";
        this.expanded2 = false;
      }
    }

    showSlider() {
      var slider = document.getElementById("slider");
      if (!this.expanded3) {
        this.closeAll();
        slider.style.display = "block";
        this.expanded3 = true;
      } else {
        slider.style.display = "none";
        this.expanded3 = false;
      }
    }

    showSlider2() {
      var slider = document.getElementById("slider2");
      if (!this.expanded4) {
        this.closeAll();
        slider.style.display = "block";
        this.expanded4 = true;
      } else {
        slider.style.display = "none";
        this.expanded4 = false;
      }
    }

    showSlider3() {
      var slider = document.getElementById("slider3");
      if (!this.expanded5) {
        this.closeAll();
        slider.style.display = "block";
        this.expanded5 = true;
      } else {
        slider.style.display = "none";
        this.expanded5 = false;
      }
    }




    handleChange= (event) => {
      if(event.target.checked == true){
        this.props.addHairFilter(this.props.hairFilters,event.target.value)
      }else{
        this.props.removeHairFilter(this.props.hairFilters,event.target.value)
      }
      this.props.fetchGnomesFilters(
        this.props.hairFilters,
        this.props.professionFilters,
        this.props.ageFilters,
        this.props.weightFilters,
        this.props.heightFilters,
        this.props.allGnomes)
    }

    handleChangeProfessions = (event) => {
      if(event.target.checked == true){
        this.props.addProfessionFilter(this.props.professionFilters,event.target.value)
      }else{
        this.props.removeProfessionFilter(this.props.professionFilters,event.target.value)
      }
      this.props.fetchGnomesFilters(
        this.props.hairFilters,
        this.props.professionFilters,
        this.props.ageFilters,
        this.props.weightFilters,
        this.props.heightFilters,
        this.props.allGnomes)
    }




    componentDidMount(){
    }

/* Set the width of the side navigation to 250px */

  openNav() {
    if(!this.opened){
      document.getElementById("mySidenav").style.height = "6.5%";
      document.getElementById("gnomesList").style.marginTop  = "150px";
      document.getElementById("openButton").innerHTML="&#10006;";
      this.opened = true;
    }else{
      this.closeNav();
      document.getElementById("openButton").innerHTML="&#9776;";
      this.opened=false;
    }



  }
  
  /* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("gnomesList").style.marginTop = "80px";
    document.getElementById("checkboxes1").style.display = "none";
    document.getElementById("checkboxes2").style.display = "none";
    document.getElementById("slider").style.display = "none";
    document.getElementById("slider2").style.display = "none";
    document.getElementById("slider3").style.display = "none";
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
            <DefaultButton className="openFilters" id="openButton" onClick={() => this.openNav()}>&#9776;</DefaultButton>


            </div>
            <div id="mySidenav" class="sidenav">

                      <div class="multiselect">
                        <div class="selectBox1" onClick={()=>this.showCheckboxes1()}>
                        <DefaultButton className="webButton">HAIR FILTERS</DefaultButton>
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
                        <DefaultButton className="webButton">PROFESSION FILTERS</DefaultButton>
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
                        <DefaultButton className="webButton">AGE</DefaultButton>
                        <div class="overSelect"></div>
                        </div>
                        <div id="slider">
                        <div class="slidecontainer">
                        <p>older than:</p>
                          <input type="range" min="1" max="400" class="slider" id="myRange" onChange={()=>this.getSliderValue()}></input>
                          <p id="showSlider"></p>
                        </div>
                        </div>
                      </div>

                      <div class="multiselect">
                        <div class="selectBox4" onClick={()=>this.showSlider2()}>
                        <DefaultButton className="webButton">WEIGHT</DefaultButton>
                        <div class="overSelect"></div>
                        </div>
                        <div id="slider2">
                        <div class="slidecontainer">
                        <p>more weight than:</p>
                          <input type="range" min="1" max="50" class="slider" id="myRange2" onChange={()=>this.getSlider2Value()}></input>
                          <p id="showSlider2"></p>
                        </div>
                        </div>
                      </div>

                      <div class="multiselect">
                        <div class="selectBox5" onClick={()=>this.showSlider3()}>
                        <DefaultButton className="webButton">HEIGHT</DefaultButton>
                        <div class="overSelect"></div>
                        </div>
                        <div id="slider3">
                        <div class="slidecontainer">
                        <p>more height than:</p>
                          <input type="range" min="1" max="150" class="slider" id="myRange3" onChange={()=>this.getSlider3Value()}></input>
                          <p id="showSlider3"></p>
                        </div>
                        </div>
                      </div>
                  </div>
            </div>




        )
    }
}



Toolbar.propTypes = {
  editHairFilters: PropTypes.func.isRequired,
  editAgeFilters: PropTypes.func.isRequired,
  editWeightFilters: PropTypes.func.isRequired,
  editHeightFilters: PropTypes.func.isRequired,
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
  weightFilters: state.filters.weightFilters,
  heightFilters: state.filters.heightFilters,
  professionFilters: state.filters.professionFilters,
  gnomes: state.gnomes.gnomes,
  allGnomes: state.gnomes.allGnomes,
})

export default connect(mapStateToProps, { search, editHairFilters, editWeightFilters, editHeightFilters, editAgeFilters,addHairFilter,removeHairFilter,addProfessionFilter,removeProfessionFilter, fetchGnomesFilters })(Toolbar);