import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WorkyListScreen from "../screens/WorkyListScreen";
import MainScreen from "../screens/MainScreen";
import MaintenanceScreen from "../screens/MaintenanceScreen";
import MapScreen from "../screens/MapScreen";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="WorkyList" component={WorkyListScreen}/>
            <Tab.Screen name="Main" component={MainScreen}/>
            <Tab.Screen name="Maintenance" component={MaintenanceScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabs;