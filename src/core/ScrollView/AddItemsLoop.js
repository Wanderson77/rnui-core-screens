import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

const Index = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ItemView = (item, key) => {
    return (
      // Flat List Item
      <View key={key}>
        <Text
          style={styles.itemStyle}
          onPress={() => getItem(item)}>
            {item.id}. {item.title}
        </Text>
        <ItemSeparatorView />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View style={styles.itemSeparatorStyle} />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* List Item as a function */}
        <ScrollView>
          {
            //Loop of JS which is like foreach loop
            dataSource.map(ItemView)
          }
        </ScrollView>

        {/* Passing List Item directly */}
        {/*<ScrollView>
          {dataSource.map((item, key) => (
            // key is the index of the array
            // item is the single item of the array
            <View key={key}>
              <Text style={styles.itemStyle}>
                {item.id}. {item.title}
              </Text>
              <View style={styles.itemSeparatorStyle} />
            </View>
          ))}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    margin: 20,
  },
  itemStyle: {
    padding: 10,
  },
  itemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});

export default Index;