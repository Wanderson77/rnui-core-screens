//This is an example of Pinch to Zoom Image//

import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class ImageViewerExemplo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModelVisible: true,
    };
  }

  ShowModalFunction(visible) {
    this.setState({ isModelVisible: false });
  }

  render() {
    const images = [{url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',},];
    return (
      <View style={styles.MainContainer}>
        <Modal
          visible={this.state.isModelVisible}
          transparent={false}
          onRequestClose={() => this.ShowModalFunction()}>
          <ImageViewer imageUrls={images} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },

});