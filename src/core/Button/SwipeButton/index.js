//Example of Swipe Button in React Native

import React, {Component} from 'react';

import { 
  SafeAreaView, 
  View, 
  Text, 
  ToastAndroid
} from 'react-native';

import SwipeButton from 'rn-swipe-button';

export default class Index extends Component {
    
  render() {
    return (
      <SafeAreaView>
        <View style={{ padding: 15 }}>
          <Text 
            style={{
              fontSize: 30,
              marginVertical: 40,
              textAlign: 'center'
            }}>
            Example of React Native Swipe Button
          </Text>
          <SwipeButton
            disabled={false}
            //disable the button by doing true (Optional)
            swipeSuccessThreshold={70}
            height={45}
            //height of the button (Optional)
            width={330}
            //width of the button (Optional)
            title="Swipe to Submit"
            //Text inside the button (Optional)
            //thumbIconImageSource={thumbIcon}
            //You can also set your own icon for the button (Optional)
            onSwipeSuccess={() => {
              alert('Submitted Successfully!');
            }}
            //After the completion of swipe (Optional)
            railFillBackgroundColor="#e688a1" //(Optional)
            railFillBorderColor="#e688ff" //(Optional)
            thumbIconBackgroundColor="#ed9a73" //(Optional)
            thumbIconBorderColor="#ed9aff" //(Optional)
            railBackgroundColor="#bbeaa6" //(Optional)
            railBorderColor="#bbeaff" //(Optional)
          />
        </View>
      </SafeAreaView>
    );
  }
}