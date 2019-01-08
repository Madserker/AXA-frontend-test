import React from 'react';
import './stylesGnome.css';
import { connect } from 'react-redux';
import {getGnomeInfo} from '../actions/getActions'
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';


class GnomeDetails extends React.Component {
    componentWillMount(){
        const { id } = this.props.match.params
        console.log(id);
        this.props.getGnomeInfo(id);
    }
    render(){
        return(
            <div className="gnomeDetails">
            <Toolbar/>
                <div className="left_info">
                {
                    this.props.gnomeDetailsLoading ?  null : <img src={this.props.gnome.thumbnail} alt=""></img>
                }
                
                </div>
            </div>
        );
    }
}

// GnomeDetails.propTypes = {
//     getGnomeInfo: PropTypes.func.isRequired,
//     gnome: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    gnome: state.gnomes.gnome,
    gnomeDetailsLoading: state.gnomes.gnomeDetailsLoading
});

export default connect(mapStateToProps, { getGnomeInfo })(GnomeDetails);