import React, { useEffect, useRef } from 'react'
import { Image, StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import bg from '../../../assets/bg.png'
import narindo from '../../../assets/narindo.png'

export const SplashScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true
            }).start();
        }, 3500);
    }, [])

    return (
        <View style={styles.container}>
                <StatusBar barStyle={'light-content'}></StatusBar>
                <ImageBackground source={bg} resizeMode="cover" style={styles.background}>
                <Animated.View style={{opacity: fadeAnim}}>
                    <Image source={narindo} style={styles.logo}></Image>
                </Animated.View>
                </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    logo : {
        width: 280,
        height: 70,
    },
    background:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
    }, 
});

export default SplashScreen;