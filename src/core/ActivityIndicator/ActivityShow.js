//This is an example code to understand ActivityIndicator//
import React from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  StyleSheet
} from 'react-native';

export default class ActivityShow extends React.Component {
  state = {showIndicator:false}
  onButtonPress = () => {
    //function to change the state to true to view activity indicator
    this.setState({
      showIndicator: true
    });
    //changing state will re-render the view and indicator will appear
  }
  render() {
    //Check if showIndicator state is true the show indicator if not show button
    if(this.state.showIndicator){
      return (
        <View style={styles.container}>
          {/*Code to show Activity Indicator*/}
          <ActivityIndicator size="large" color="#0000ff" />
          {/*Size can be large/ small*/}
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
            {/*On CLick of a button onButtonPress will bw called will change the state*/}
          <Button onPress={this.onButtonPress} title='Click to see Indicator' />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  }
});