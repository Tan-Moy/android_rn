import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums: [] };//initializing the state
    componentWillMount() {
        //ASYNC HTTP reuest
        //eslint-disable-next-line
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => {
                //console.log(responseData);
                this.setState({ albums: responseData });
            });//modifying the state 
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            //passing album as props to AlbumDetail
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}
