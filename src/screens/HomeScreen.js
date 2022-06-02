import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>  
      <View>   
        <Text> Home Screen </Text>
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
