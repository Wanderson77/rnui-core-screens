import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import styles from './styles'

export default function index() {
  const [showSquare, setShowSquare] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [showTriangle, setShowTriangle] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [showOval, setShowOval] = useState(false);

  const changeShape = (shape) => {
    setShowSquare(shape == 'Square');
    setShowCircle(shape == 'Circle');
    setShowTriangle(shape == 'Triangle');
    setShowRectangle(shape == 'Rectangle');
    setShowOval(shape == 'Oval');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={
            showSquare
              ? styles.SquareShapeView
              : showCircle
              ? styles.CircleShapeView
              : showRectangle
              ? styles.RectangleShapeView
              : showTriangle
              ? styles.TriangleShapeView
              : showOval
              ? styles.OvalShapeView
              : ''
          }
        />
        <TouchableOpacity
          onPress={() => changeShape('Square')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Square
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Circle')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Circle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Triangle')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Triangle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Rectangle')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Rectangle
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeShape('Oval')}
          active={0.8}>
          <Text style={{marginTop: 20, fontSize: 20}}>
            Oval
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
