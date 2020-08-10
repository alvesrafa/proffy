import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";
import { Ionicons } from "@expo/vector-icons";
const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 16,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#Fafafc",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32263D",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              color={focused ? "#8257e5" : color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              color={focused ? "#8257e5" : color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
