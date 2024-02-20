import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF00FF',
  },
  OvalShapeView: {
    //To make Oval Shape
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: '#ED2525',
    borderRadius: 50,
    transform: [{scaleX: 2}],
  },
  SquareShapeView: {
    //To make Square Shape
    width: 100,
    height: 100,
    backgroundColor: '#14ff5f',
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#14ff5f',
  },
  TriangleShapeView: {
    //To make Triangle Shape
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#606070',
  },
});

export default styles;