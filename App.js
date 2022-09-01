import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import logo from './assets/logo.png'; 
import SplashScreen from './src/features/LandingPage/SplashScreen';
import LoginView from './src/features/LandingPage/LoginView';
import MainContainer from './src/shared/components/MainContainer';
import React, { useRef } from 'react';

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true)

  const showSplashScreen = () => {
    setTimeout(() => {
      setSplashScreen(false)
    }, 5000);
  }
  
  useEffect(() => {
    showSplashScreen()
  }, [])
  return (
    <>
    {splashScreen ? <SplashScreen></SplashScreen> : <LoginView></LoginView>}
      </>
  );
}
