import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import {fetchGnomes} from '../actions/getActions'
import PropTypes from 'prop-types';


class GnomeDetails extends React.Component {

    componentWillMount(){
        //this.props.loadGnomeInfo(gnome);
    }
    render(){
        return(
            <div className="gnomeDetails">
                {
                    // this.props.gnomes.map((gnome) => (
                    //     <div className="item" key={gnome.id}>
                    //     < ListItem gnome={gnome}/>
                    //     </div>
                    // ))
                }
            </div>
        );
    }
}

GnomeDetails.propTypes = {
    fetchGnomes: PropTypes.func.isRequired,
    gnomes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    gnomes: state.gnomes.gnomes
});

export default connect(mapStateToProps, { fetchGnomes })(GnomeDetails);