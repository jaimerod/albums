import React, { Component } from 'react';
import { Text, Image, Linking, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends Component {
  render() {
    const { title, artist, image, thumbnail_image, url } = this.props.album;
    const { 
      albumStyle, 
      headerTextStyle, 
      thumbnailStyle, 
      thumbnailContainerStyle, 
      albumInfoContainerStyle 
    } = styles;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image 
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }} 
            />
          </View>
          <View style={albumInfoContainerStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image 
            style={albumStyle}
            source={{ uri: image }} 
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}> Buy {title}</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  albumStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  albumInfoContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};
