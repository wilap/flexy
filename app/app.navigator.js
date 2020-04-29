import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import MatchScreen from './screens/match.screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}
const Login = {
    screen: LoginScreen,
    navigationOptions: {
        header: null
    }
}
const Match = {
    screen: MatchScreen,
    navigationOptions: {
        headerMode: 'screen',
        headerTitle: 'Matches',
        drawerLabel: 'Matches'
    }
}
const MatchStack = createStackNavigator({
    Match: Match
},{})
const RouteConfig = {
    initialRoute: 'Splash'
}
const AppNavigator = createDrawerNavigator({
    Splash: Splash,
    Login: Login,
    Match: {screen: MatchStack}
},RouteConfig)

export default createAppContainer(AppNavigator);

