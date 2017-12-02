import React from 'react';
import {Text , View} from 'react-native';
import {Component} from 'react';



const styles = {
    textStyle: {
        fontSize: 35
    },

    viewStyle: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
        height: 60,  
        elevation: 5,
        position: 'relative'
        
    }

}

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    

    render() {
        const {textStyle, viewStyle} = styles;
        return (
            <View style={viewStyle}>
            <Text style={textStyle}>
               {this.props.headerText}
            </Text>
            </View>
               
           
        );
    }
}

export default Header;

