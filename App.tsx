import React from 'react';
import { LoadAssets } from './src/components';
import { RootNavigator } from './src/navigation';

const fonts = {
  PoppinsRegular: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
  PoppinsMedium: require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
  PoppinsSemiBold: require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  PoppinsBold: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
  PoppinsLight: require('./assets/fonts/Poppins/Poppins-Light.ttf'),
  PoppinsBlack: require('./assets/fonts/Poppins/Poppins-Black.ttf'),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <RootNavigator />
    </LoadAssets>
  );
}
