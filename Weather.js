import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"],
        title: "Haze",
        subtitle: "Haze weather"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44","#4286f4"],
        title: "Thunderstorm",
        subtitle: "Thunderstorm weather"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"],
        title: "Drizzle",
        subtitle: "Drizzle weather"
    }, 
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#7F7FD5","#86A8E7","#91EAE4"],
        title: "Rain",
        subtitle: "Rain weather"
    }, 
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#D3CCE3","#E9E4F0"],
        title: "Snow",
        subtitle: "Snow weather"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"],
        title: "Atmosphere",
        subtitle: "Atmosphere weather"
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fc4a1a","#f7b733"],
        title: "Clear",
        subtitle: "Clear weather"
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#ADA996","#F2F2F2","#DBDBDB","#EAEAEA"],
        title: "Clouds",
        subtitle: "Clouds weather"
    }, 
    Dust: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"],
        title: "Dust",
        subtitle: "Dust weather"
    },  
    Mist: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"],
        title: "Mist",
        subtitle: "Mist weather"
    }
}

export default function Weather ({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
              <StatusBar barStyle="light-content"/>
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textcontainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
        
    )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm","Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Dust", "Haze", "Mist"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    }, 
    halfcontainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    textcontainer: {
        alignItems: "flex-start"
    }
})