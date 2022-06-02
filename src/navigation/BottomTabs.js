import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
  } from 'react-native';

import HomeScreen from "../screens/HomeScreen";
import WorkyListScreen from "../screens/WorkyListScreen";
import MainScreen from "../screens/MainScreen";
import MaintenanceScreen from "../screens/MaintenanceScreen";
import MapScreen from "../screens/MapScreen";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Main"
        screenOptions={{
            tabBarStyle: 
            {height: 70}
        }}
        tabBarOptions={{            
            showLabel: false,
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style={styles.container}>
                        <Image source={require('../assets/icon/home.png')}
                               style={{width: 18, height: 18, tintColor: focused ? '#069BFE' : '#444978'}}/>
                        <Text style={{color: '#444978', fontSize: 10, fontFamily: 'IBMPlexSans-Regular', marginTop: 5, fontWeight: '600'}}>
                            Home
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="WorkyList" component={WorkyListScreen}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style={styles.container}>
                        <Image source={require('../assets/icon/list.png')}
                               style={{width: 18, height: 18, tintColor: focused ? '#069BFE' : '#444978'}}/>
                        <Text style={{color: '#444978', fontSize: 10, fontFamily: 'IBMPlexSans-Regular', marginTop: 5, fontWeight: '600'}}>
                            Worky List
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Main" component={MainScreen}
            options = {{
                title: 'Warehouse',
                headerStyle: {
                backgroundColor: '#fff'
                },
                headerTitleAlign: 'center',
                headerTintColor: '#444978',
                headerTitleStyle: {
                fontWeight: 'normal',
                fontSize: 14
                },
                headerLeft: ({focused}) => <View style={{marginLeft: 5, padding: 8, justifyContent:'center', alignItems:'center', borderRadius:50, width: 40, height: 40, backgroundColor: '#F9FAFB'}}>
                                            <TouchableOpacity>  
                                                <Image style={{margin: 10, width: 18, height: 16, tintColor: focused ? '#069BFE' : '#444978'}} source={require('../assets/icon/hamburger.png')}/>
                                            </TouchableOpacity>
                                            </View>,
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require('../assets/icon/plus.png')}
                               style={{margin: 10, width: 44, height: 44, tintColor: focused ? '#069BFE' : '#444978'}}/>
                    </View>
                )
            }}/>
            <Tab.Screen name="Maintenance" component={MaintenanceScreen}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style={styles.container}>
                        <Image source={require('../assets/icon/maintenance.png')}
                               style={{width: 18, height: 18, tintColor: focused ? '#069BFE' : '#444978'}}/>
                        <Text style={{color: '#444978', fontSize: 10, fontFamily: 'IBMPlexSans-Regular', marginTop: 5, fontWeight: '600'}}>
                            Maintenance
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Map" component={MapScreen}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style={styles.container}>
                        <Image source={require('../assets/icon/map.png')}
                               style={{width: 18, height: 18, tintColor: focused ? '#069BFE' : '#444978'}}/>
                        <Text style={{color: '#444978', fontSize: 10, fontFamily: 'IBMPlexSans-Regular', marginTop: 5, fontWeight: '600'}}>
                            Map
                        </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center', 
    justifyContent:'center'
  }
});

export default BottomTabs;