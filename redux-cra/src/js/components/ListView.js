import React, {Component} from 'react';
import ListItem from './ListItem';

export default class ListView extends Component {
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    render(){
        return(
            <div>
                <ListItem />
            </div>
        )
    }
}