import React from 'react';

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                {this.props.gnome}
            </div>
        )
    }
}