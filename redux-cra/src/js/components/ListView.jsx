import React from 'react';
import ListItem from './ListItem';
import './styles.css';
import { connect } from 'react-redux';
import {fetchGnomes, loaded, resetList, getGnomeInfo} from '../actions/getActions'
import PropTypes from 'prop-types';


class ListView extends React.Component {
    template = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    componentWillMount(){
        console.log(this.props.gnomes)
        if(this.props.gnomes.length==0){
            this.props.fetchGnomes();
        }else{
            this.props.loaded();
            this.props.resetList();
        }
    }

    loadSideNav(){

    }

    showDetails(id){
        this.props.getGnomeInfo(id);
        document.getElementById("EGG").style.width ="400px";
        document.getElementById("gnomesList").style.marginRight  = "400px";
        console.log("is this real life?");
    }
    closeDetails(){
        document.getElementById("EGG").style.width ="0";
        document.getElementById("gnomesList").style.marginRight  = "0";
    }
    
    render(){
        return(
            <div>
            <div className="gnomesList" id="gnomesList">

{
                    this.props.listLoading ?  

                    <div className="allItems">  {   
                    this.template.map(el=>(
                        <div className="item">
                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    ))
                }
                </div>
                    :            
                    <div className="allItems">
                      {   
                    this.props.gnomes.map((gnome) => (
                        <div className="item" key={gnome.id} onClick={()=>this.showDetails(gnome.id)}>
                        < ListItem gnome={gnome} />
                        </div>
                    ))
                    }
                    </div>
                }

            </div>
            <div id="EGG" className="EGG">{
            this.props.gnomeDetailsLoading ?  
            <div id="EGG2">
            NOTHING HERE BUT US CHICKEN
       </div>
            :
            <div id="EGG3">
                        <button className="closeDetails" id="openButton" onClick={() => this.closeDetails()}>&#10006;</button>
                {
                    this.props.gnomeDetailsLoading ?  null : <img className="detailsImage" src={this.props.gnome.thumbnail} alt=""></img>
                }
                <div>
                    {this.props.gnomeDetailsLoading ?  null : <h2>{this.props.gnome.name}</h2>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Age: {this.props.gnome.age}</p>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Weight: {this.props.gnome.weight}</p>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Height: {this.props.gnome.height}</p>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Hair color: {this.props.gnome.hair_color}</p>}
                </div>
            </div>
            }

<div className="professions">
                <h1>PROFESSIONS</h1>
                {
                    this.props.gnomeDetailsLoading ?  null : this.props.gnome.professions.map((profession) => (
                        <div className="profession" key={profession}>
                            <p>{profession}</p>
                        </div>
                    ))
                }
                </div>


                <div className="friends">
                <h1>FRIENDS</h1>
                {
                    this.props.gnomeDetailsLoading ?  null : this.props.gnome.friends.map((friend) => (
                        <div className="friend" key={friend}>
                            <p>{friend}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            </div>

            
        );
    }
}

ListView.propTypes = {
    fetchGnomes: PropTypes.func.isRequired,
    getGnomeInfo: PropTypes.func.isRequired,
    resetList: PropTypes.func.isRequired,
    loaded: PropTypes.func.isRequired,
    gnomes: PropTypes.array.isRequired,
    hairFilters: PropTypes.array.isRequired,
    listLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    gnomes: state.gnomes.gnomes,
    allGnomes: state.gnomes.allGnomes,
    listLoading: state.gnomes.listLoading,
    hairFilters:state.filters.hairFilters,
    gnome: state.gnomes.gnome,
    gnomeDetailsLoading: state.gnomes.gnomeDetailsLoading

});

export default connect(mapStateToProps, { getGnomeInfo, fetchGnomes,loaded,resetList })(ListView);

