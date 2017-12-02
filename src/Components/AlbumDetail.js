import React, { Component } from 'react';
import {Text , View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'


class AlbumDetail extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    styles = {
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },

        headerTextStyle: {
            fontSize: 18
        },

        imageStyle: {
            height: 50,
            width: 50,
        },

        imageContainerStyle: {
            justifyContent: 'center',
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10

        },

        artworkStyle: {
            height: 300,
            flex: 1,
            width: null
        }
    }
    render() {
        const {thumbnail_image, title, artist, image, url} = this.props.album
        return (
            <Card>

                <CardSection>
                    <View style={this.styles.imageContainerStyle}>
                        <Image style={this.styles.imageStyle} source={{uri: thumbnail_image}}/>
                    </View>
                    <View style={this.styles.headerContentStyle}>
                        <Text style={this.styles.headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={this.styles.artworkStyle} source={{uri: image}}/>
                </CardSection>

                <CardSection>
                    <Button onPress={() => Linking.openURL(url)} title={title}/>
                </CardSection>
            </Card>
        );
    }
}

export default AlbumDetail;