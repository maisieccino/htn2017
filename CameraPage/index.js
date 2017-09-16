import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Camera, Permissions } from "expo";

class CameraPage extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission) {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1, justifyContent: "flex-start" }}
            type={this.state.type}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 150,
              }}
            >
              Take a photo of the nearest parking signs to your car.
            </Text>
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                flex: 0,
                flexDirection: "row",
                padding: 5,
                marginTop: "auto",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0,
                  alignSelf: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}
              >
                <Text
                  style={{
                    flex: 0,
                    fontSize: 18,
                    marginBottom: 10,
                    color: "white",
                  }}
                >
                  Take A Photo
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

export default CameraPage;
