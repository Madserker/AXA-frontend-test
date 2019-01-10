import React from 'react';
import ListItem from './ListItem';
import './styles.css';
import { connect } from 'react-redux';
import {fetchGnomes, loaded, resetList} from '../actions/getActions'
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
    render(){
        return(
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
                        <div className="item" key={gnome.id}>
                        < ListItem gnome={gnome}/>
                        </div>
                    ))
                    }
                    </div>
                }

            </div>
        );
    }
}

ListView.propTypes = {
    fetchGnomes: PropTypes.func.isRequired,
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
    hairFilters:state.filters.hairFilters
});

export default connect(mapStateToProps, { fetchGnomes,loaded,resetList })(ListView);