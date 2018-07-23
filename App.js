
import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import { StackNavigator } from 'react-navigation';
import ProjectDetails from './screens/ProjectDetails';

const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  ProjectDetails: {screen: ProjectDetails}
}, { 
  initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

