import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import {getGnomeInfo} from '../actions/getActions'
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';


class GnomeDetails extends React.Component {
    componentWillMount(){
        const { id } = this.props.match.params
        console.log(id);
    }
    render(){
        return(
            <div className="gnomeDetails">
                        <Toolbar/>
                {
                <img className="image" src={this.props.gnome.thumbnail} alt=""></img>
                    
                    // this.props.gnomes.map((gnome) => (
                    //     <div className="item" key={gnome.id}>
                    //     < ListItem gnome={gnome}/>
                    //     </div>
                    // ))
                }
                halo
            </div>
        );
    }
}

// GnomeDetails.propTypes = {
//     getGnomeInfo: PropTypes.func.isRequired,
//     gnome: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    gnome: state.gnomes.gnome
});

export default connect(mapStateToProps, { getGnomeInfo })(GnomeDetails);