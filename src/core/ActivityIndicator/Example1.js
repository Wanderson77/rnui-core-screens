import React, { Component } from 'react';

import {
  Text,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

export default class Example1 extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <Modal
        visible={this.state.modalVisible}>
        <View>
          <View>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" color="#f35588"/>
            {/* <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" /> */}
          </View>
        </View>
      </Modal>
    )
  }
}
