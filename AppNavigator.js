import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Grid from "./src/screens/Grid.js";
import List from "./src/screens/List.js";
import Page from "./src/screens/Page.js";


const Project= createStackNavigator({
  Grid: {
   screen: Grid
  },
  List: {
   screen: List
  },
  Page: {
    screen: Page
  }
});

export default createAppContainer(Project);
