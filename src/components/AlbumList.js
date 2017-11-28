import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = {
    albums: []
  };
  
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }
  
  renderAlbums() {
    return this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />;
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    /*
    fontSize: 20
    */
  },
  viewStyle: {
    /*
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    justifyContent: 'center',
    height: 80,
    paddingTop: 25,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2
    */
  }
};
