import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'

export const MainContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
    }, 
});
export default MainContainer
