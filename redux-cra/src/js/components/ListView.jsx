import React from 'react';
import ListItem from './ListItem';
import './styles.css';
import { connect } from 'react-redux';
import {fetchGnomes} from '../actions/getActions'
import PropTypes from 'prop-types';


class ListView extends React.Component {
    template = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    componentWillMount(){
        this.props.fetchGnomes();
    }
    render(){
        return(
            <div className="gnomesList">

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
                    <div className="allItems">  {     
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
    gnomes: PropTypes.array.isRequired,
    listLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    gnomes: state.gnomes.gnomes,
    listLoading: state.gnomes.listLoading
});

export default connect(mapStateToProps, { fetchGnomes })(ListView);