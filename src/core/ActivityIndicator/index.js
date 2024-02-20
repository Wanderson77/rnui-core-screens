
import { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';

const Index = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              React Native ActivityIndicator
            </Text>
            <Button
              title="Start Loading"
              onPress={startLoading}>
            </Button>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default Index;