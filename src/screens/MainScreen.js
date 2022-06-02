import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput, 
  FlatList
} from 'react-native';
import { useState } from 'react';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

const MainScreen = ({ navigation }) => {

  const [text, onChangeText] = useState("");
  const dataSource = [
    { 
      id: 0,
      warehouseType: 'Personnel',
      warehouseName: 'Warehouse A',
      department: 'TE',
      customer: 'Customer B',
      location: '3891 Ranchview Dr. Richardson, California 62639',
      personInCharge: 'Jane Cooper'
    },
    { 
      id: 1,
      warehouseType: 'Personnel',
      warehouseName: 'Warehouse B',
      department: 'TE',
      customer: 'Customer B',
      location: '3891 Ranchview Dr. Richardson, California 62639',
      personInCharge: 'Jane Cooper'
    },
    { 
      id: 2,
      warehouseType: 'Customer',
      warehouseName: 'Warehouse B',
      department: 'TE',
      customer: 'Customer B',
      location: '3891 Ranchview Dr. Richardson, California 62639',
      personInCharge: 'Jane Cooper'
    },
  ];

  const RenderDelete = () => {
    return (
      <View style={[styles.swipeButtons , {backgroundColor:'#F04438',  marginLeft: 5}]}>
        <Image source={require('../assets/icon/trash.png')}
                                style={{margin: 10, width: 18.8, height: 18.8}}/> 
        <Text style={{color:'#fff', fontSize: 11, fontWeight:'600'}}>
          Delete
        </Text>        
      </View>
    )
  }

  const RenderEdit = () => {
    return (
      <View style={[styles.swipeButtons , {backgroundColor:'#ADB5BD', marginRight: 5}]}>
        <Image source={require('../assets/icon/pencil.png')}
                                style={{margin: 10, width: 18, height: 18}}/> 
        <Text style={{color:'#fff', fontSize: 12, fontWeight:'600'}}>
          Edit
        </Text>        
      </View>
    )
  }

  const RenderItem = ({item, index}) => {
    return(
      <GestureHandlerRootView>
        <Swipeable renderRightActions={RenderDelete} renderLeftActions={RenderEdit}>
          <View style={styles.flatListItem}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.warehouseType}>
                <Text style={{fontSize: 12, fontWeight: '400', color: '#069BFE'}}>{item.warehouseType}</Text>
              </View>
              <View style={styles.department}>
                <Text style={{fontSize: 10, fontWeight: '400', color: '#F67C00'}}>{item.department}</Text>
              </View>
            </View>        
            <View style={{marginTop: 3}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#343A40'}}>{item.warehouseName}</Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#343A40'}}>{item.customer}</Text>
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <Image source={require('../assets/icon/location.png')} style={{width: 10.5, height: 12.67, top: 2}}/> 
                <Text style={{marginLeft: 5, fontSize: 12, fontWeight: '400', color: '#7A8289'}}>{item.location}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <Image source={require('../assets/icon/person.png')} style={{width: 12, height: 8.4, top: 5}}/> 
                <Text style={{marginLeft: 5, fontSize: 12, fontWeight: '400', color: '#7A8289'}}>{item.personInCharge}</Text>
              </View>
            </View>    
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    )
  }

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
      <FlatList
        data={dataSource} 
        renderItem={({item, index}) => 
        <RenderItem item={item} index={index}/> 
      }/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#F1F1F1', 
    alignItems:'center',
    justifyContent: 'center'
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
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6
    },
  flatListItem: {
    marginTop: 5, 
    padding: 8,
    backgroundColor:'#FFFFFF', 
    width: 345, 
    height: 120, 
    borderColor: '#E2E8F0', 
    borderRadius: 5, 
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6
  },
  warehouseType: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 155, 254, 0.1)',
    paddingTop: 1,
    paddingLeft: 13,
    paddingBottom: 1,
    paddingRight: 13,
    width: 81,
    height: 18,
    borderRadius: 20, 
    marginTop: 1
  },
  department : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCD8B3', 
    position:'absolute', 
    left: 304,
    width: 24,
    height: 24,
    borderRadius: 18, 
    marginTop: 3
  },
  swipeButtons: {
    alignItems:'center', 
    justifyContent:'center', 
    height: 120, 
    width: 80, 
    marginTop: 5,
    borderRadius: 5,
    paddingTop: 17, 
    paddingLeft: 23, 
    paddingBottom: 17, 
    paddingRight: 23
  }
});

export default MainScreen;
