import React from 'react';
import { ImageBackground, StyleSheet, Image, Text,View } from 'react-native';

function First(props) {
    return (

        <ImageBackground style={styles.background}>
            <Text style={styles.txt}>namaste</Text>

            <Image style={styles.logo} 
            source={require("../assets/namaste.png")}/>
            <Text style={styles.txt2}>Namaste is an application designed to help you relax and let go of all negative energy.Have a peace of mind</Text>
            <View style={styles.button}><Text style={styles.text}>TRY ME</Text></View>
                    </ImageBackground>
    
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#E8BD48",
    },
    logo:{
        top:150,
        alignSelf:"center",
        width:200,
        height:200,
    },
    txt:{
        textTransform:"uppercase",
        alignSelf:"center",
        top:50,
        fontWeight:"bold",
        fontSize:50,
    },
    txt2:{
        alignSelf:"center",
        top:300,
        fontSize:20,
        textAlign:'center',
        color:"#fff"
    },
    button:{
        width:415,
        height:100,
        top:465,
        backgroundColor:"red",
        alignItems:"center",
    }, 
    text:{
        fontWeight:"bold",
        top:30,
        fontSize:30
    }
})

export default First;