import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput
} from 'react-native';
import { useState } from 'react';

const MainScreen = ({ navigation }) => {

  const [text, onChangeText] = useState("");
 
  return (
    <SafeAreaView style={styles.container}>  
      <View style={styles.buttonContainer}>
        <View style={[styles.buttons, {width: 80, height:50}]}>   
          <Text style={styles.buttonTextProvision}>Provision</Text>
          <Text style={styles.buttonTextProvision}> 1 </Text>
        </View>  
        <View style={[styles.buttons, {width: 105, height:50}]}>   
          <Text style={styles.buttonTextCritical}>Critical Stock</Text>
          <Text style={styles.buttonTextCritical}> 5 </Text>
        </View> 
        <View style={[styles.buttons, {width: 138, height:50}]}>   
          <Text style={styles.buttonTextApproval}>Waiting for Approval</Text>
          <Text style={styles.buttonTextApproval}> 10 </Text>
        </View>  
      </View>
      <View style={styles.searchHolder}>
        <Image source={require('../assets/icon/search.png')}
                                style={{margin: 10, width: 18, height: 18}}/>
        <View style={{width: 190}}>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              padding: 10}}
              onChangeText={onChangeText}
              value={text}/>
        </View>        
        <Image source={require('../assets/icon/mic.png')}
                                style={{margin: 10, width: 14, height: 18}}/>
        <Image source={require('../assets/icon/line.png')}
                                style={{margin: 10, width: 4, height: 18}}/>
        <Image source={require('../assets/icon/filter.png')}
                                style={{margin: 10, width: 18, height: 16}}/>                        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#F1F1F1', 
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'column',     
    alignItems:'center', 
    backgroundColor: '#FFFFFF',
    margin: 5,  
    padding: 8,
    width: 80, 
    height:50, 
    borderColor: '#E2E8F0', 
    borderRadius: 5, 
    borderWidth: 1    
  },
  buttonTextProvision: {
    color: '#344563', 
    fontSize: 13
  },
  buttonTextCritical: {
    color: '#F04438', 
    fontSize: 13
  },
  buttonTextApproval: {
    color: '#069BFE', 
    fontSize: 13
  },
  searchHolder: {
    flexDirection:'row', 
    justifyContent:'center', 
    paddingTop: 12,
    paddingLeft: 16,
    paddingBottom: 12,
    paddingRight: 16,
    alignItems:'center', 
    backgroundColor:'#FFFFFF', 
    width: 345, 
    height:50, 
    borderColor: '#E2E8F0', 
    borderRadius: 5, 
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5
    },

});

export default MainScreen;
