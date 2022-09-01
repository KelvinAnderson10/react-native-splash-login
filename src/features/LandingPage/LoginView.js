import React, { useEffect, useRef, useState } from 'react'
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native'
import MainContainer from '../../shared/components/MainContainer'
import bg from '../../../assets/bg.png'
import narindo from '../../../assets/narindo.png'
import LottieView from 'lottie-react-native'
import animation from '../../../assets/72342-welcome.json'
import { Entypo } from '@expo/vector-icons'; 

export const LoginView = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [email, setEmail] = useState('')

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, [])

    const onPress = () => {
        Alert.alert(
            "Alert",
            `User ${email} successfully Login !`,
        )
    }
    return (
        <MainContainer>
            <ImageBackground source={bg} resizeMode="cover" style={styles.background}>
                <Animated.View style={[styles.background, {opacity: fadeAnim}]}>
                    <LottieView autoPlay style={styles.image} source={animation}></LottieView>
                    <Image source={narindo} style={styles.logo}></Image>
                    <Text style={{color: 'brown', fontSize: 20, fontWeight: 'bolder'}}>ASSET MANAGEMENT</Text>
                    <View style={[styles.input, styles.searchSection]}>
                        <Entypo style={{marginRight: 5, marginLeft: 5}} name="mail-with-circle" size={20} color="black" />
                        <TextInput value={email} placeholder='Email Address' keyboardType={'email-address'} onChangeText={setEmail}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={{color: 'white'}}>LOGIN</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ImageBackground>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image : {
        width : 200,
        height : 200,
        alignItems : "center",
    },
    background:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 50,
    },
    input: {
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 5,
        borderRadius: 20,
        marginTop: 50,
        backgroundColor: 'white'
    },
    button: {
        alignItems: "center",
        backgroundColor: "brown",
        padding: 10,
        width: 240,
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 80
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
})

export default LoginView;