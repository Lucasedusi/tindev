import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { YellowBox } from 'react-native';

Icon.loadFont();

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './routes'
export default function App() {
  return (
    <Routes />
  );
}
