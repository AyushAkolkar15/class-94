import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
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
  const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Access the selected file from the event
    const file = e.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform the file upload logic here (e.g., send the file to a server)

    // For demonstration purposes, you can log the file information
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };
  
  }
  
    return(
      <View style={styles.container}>
        <div>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <TouchableOpacity ><Image source={require("../assets/upload.png")} style={styles.appIcon} onClick={handleUpload} ></Image></TouchableOpacity>
    </div>
    </View>
  );
};
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#E3E4FA",
   // alignItems: "center",
    //justifyContent: "center"
  },
    appIcon: {
    width: RFValue(95),
    height: RFValue(405),
    resizeMode: "contain",
    marginBottom: RFValue(100),
    marginTop: RFValue(-190),
    marginLeft: RFValue(200)
  },
})