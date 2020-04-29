import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { View, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { inject } from 'mobx-react';
import Login from '../components/login.component';

@inject("stores")
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {stores} = this.props
        return (
            <Container>
            <View style={styles.container}>
            <Content scrollEnabled={false}>
            <ImageBackground style={styles.loginBackground} source={stores.config.loginBG}>
            <View style={styles.loginForeground}>
            <Login {...this.props}/>
            </View>
            </ImageBackground>
            </Content>
            </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       position: 'absolute',
        bottom: -45,
         left: -50,
         right: -50,
          top: -45,
    },
    loginBackground: {
        flex: 1,
        resizeMode: 'cover',
        // width: null,
        // height: null,
    },
    loginForeground: {
        flex: 1,
        marginTop: Dimensions.get('window').height/1.75,
        paddingTop: 20,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 90,
        bottom: 0
    }
})