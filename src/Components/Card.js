import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Card extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    styles = {
        containerStyle: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            elevation: 2,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10
            
        }
    }
    render() {
        return (
            <View style={this.styles.containerStyle}>
               {this.props.children}
            </View>
        );
    }
}

export default Card;