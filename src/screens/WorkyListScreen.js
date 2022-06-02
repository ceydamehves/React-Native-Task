import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from 'react-native';

const WorkyListScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>  
      <View>   
        <Text> Worky List Screen </Text>
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default WorkyListScreen;
