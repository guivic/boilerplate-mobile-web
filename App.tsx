import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './utils';
import { NavigateServiceProvider } from './services';

export const App = () => (
  <NavigationContainer>
    <NavigateServiceProvider>
      <Navigation></Navigation>
    </NavigateServiceProvider>
  </NavigationContainer>
);

export default App;