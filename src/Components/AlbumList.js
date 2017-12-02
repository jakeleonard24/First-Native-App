import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {
    constructor(){
        super()

        this.state = {
            albums: []
        }
        
    }

    componentWillMount(){
        axios.get('https:/rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({albums: response.data})
        })
    }

    renderAlbums(){
        return this.state.albums.map((album, i) => {
            return(
                <AlbumDetail key={i} album={album} i={i} />
            )
        })
    }
    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;