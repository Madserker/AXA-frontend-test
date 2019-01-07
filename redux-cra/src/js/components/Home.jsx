import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import {fetchGnomes} from '../actions/getActions'
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ListView from './ListView';


export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <Toolbar/>
                <ListView/>
            </div>
        );
    }
}
