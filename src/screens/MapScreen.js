import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from 'react-native';

const MapScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#F1F1F1', alignItems: 'center', justifyContent: 'center'}}>  
        <Text style={{fontFamily:'IBMPlexSans-Regular', fontWeight: '600', fontSize: 24}}> Map Screen </Text>
    </SafeAreaView>
  );
};

export default MapScreen;
