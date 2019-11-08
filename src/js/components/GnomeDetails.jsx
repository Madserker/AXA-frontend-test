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
                <div>
                    {this.props.gnomeDetailsLoading ?  null : <h2>{this.props.gnome.name}</h2>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Age: {this.props.gnome.age}</p>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Weight: {this.props.gnome.weight}</p>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Height: {this.props.gnome.height}</p>}
                    {this.props.gnomeDetailsLoading ?  null : <p>Hair color: {this.props.gnome.hair_color}</p>}
                </div>
                </div>
                <div className="right_info">
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

// GnomeDetails.propTypes = {
//     getGnomeInfo: PropTypes.func.isRequired,
//     gnome: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    gnome: state.gnomes.gnome,
    gnomeDetailsLoading: state.gnomes.gnomeDetailsLoading
});

export default connect(mapStateToProps, { getGnomeInfo })(GnomeDetails);