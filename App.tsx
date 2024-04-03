const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Authentification from "./screens/Authentification";
import Authentification1 from "./screens/Authentification1";
import Rectangle from "./components/Rectangle";
import Map1 from "./screens/Map1";
import Map2 from "./screens/Map2";
import Feed from "./screens/Feed";
import Feed1 from "./screens/Feed1";
import Status1 from "./screens/Status1";
import Message from "./screens/Message";
import Message1 from "./screens/Message1";
import Message2 from "./screens/Message2";
import Message3 from "./screens/Message3";
import AjoutDePost from "./screens/AjoutDePost";
import Profile from "./screens/Profile";
import MessagesText from "./components/MessagesText";
import Register from "./screens/Register";
import Frame from "./components/Frame";
import IconPencil from "./components/IconPencil";
import IconMail from "./components/IconMail";
import Message4 from "./screens/Message4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-LightItalic": require("./assets/fonts/Nunito-LightItalic.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentification"
              component={Authentification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentification1"
              component={Authentification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map2"
              component={Map2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feed1"
              component={Feed1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Status1"
              component={Status1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message1"
              component={Message1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message2"
              component={Message2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message3"
              component={Message3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AjoutDePost"
              component={AjoutDePost}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message4"
              component={Message4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
