import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

const appIcon = require("../assets/logo.png");

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          isEnabled: false,
          light_theme: true,
          profile_image: "",
          name: ""
        };
}



render (){
  const BookButton = () => {
    const HandlePress =() => {
      Linking.openURL("https://charbzaban.com/wp-content/uploads/2017/12/Let-s-pretend-this-never-happened-a-mostly-true-memoir-.pdf")
    }
  }
    return(
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <Text style={styles.appTitleTextContainer}>BookWorm</Text>
          <Image source={appIcon} style={styles.appIcon}/>
          <TouchableOpacity style={styles.lptnh}>
            <Image source={require("../assets/logo.png")} style={styles.lptnhImage} />          
          </TouchableOpacity>

       
        </View>

    )
      
}
}
const styles = StyleSheet.create ({
    appTitleTextContainer: {
    color: "#15193c",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    fontColor:"#15193c",
    marginBottom: RFValue(0),
    marginLeft: RFValue(40)
  },
  appTextContainer: {
    color: "#15193c",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    fontColor:"#15193c",
    marginBottom: RFValue(0),
    marginLeft: RFValue(40)
  },
  container: {
    flex: 1,
    backgroundColor: "#E3E4FA",
   // alignItems: "center",
    //justifyContent: "center"
  },
    appIcon: {
    width: RFValue(45),
    height: RFValue(405),
    resizeMode: "contain",
    marginBottom: RFValue(100),
    marginTop: RFValue(-224),
    marginLeft: RFValue(15)
  },
})