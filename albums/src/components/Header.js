import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    const text = this.props.headerText;

    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
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
  }
};
