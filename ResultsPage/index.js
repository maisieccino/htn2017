import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "../Styles";

class ResultsPage extends Component {
  render() {
    return (
      <View style={[Styles.page, { alignItems: "center", justifyContent: "center" }]}>
        <Text style={[Styles.headerText, { textAlign: "center" }]}>Yes</Text>
        <Text style={{ textAlign: "center" }}>You can park here until 12:00.</Text>
        <TouchableOpacity style={Styles.button} onPress={() => this.props.history.push("/camera")}>
          <Text style={Styles.buttonText}>Start Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ResultsPage;
