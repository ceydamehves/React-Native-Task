import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from 'react-native';

const MainScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>  
      <View>   
        <Text> Main Screen </Text>
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default MainScreen;
