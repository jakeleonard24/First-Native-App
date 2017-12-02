import React, { Component } from 'react';
import {Text , View} from 'react-native';

class CardSection extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    styles = {
        containerStyle:{
            // borderBottom: 1,
            padding: 5,
            backgroundColor:'#FFF',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#DDD',
            position: 'relative'
        }
    }
    render() {
        return (
            <View style={this.styles.containerStyle}>{this.props.children}</View>
        );
    }
}

export default CardSection;