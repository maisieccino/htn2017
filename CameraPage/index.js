import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Camera, Permissions } from "expo";
import Styles from "../Styles";

class CameraPage extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    goToNextPage: false,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  async clickShutterButton() {
    if (this.camera) {
      const uri = await this.camera.takePictureAsync();
      const data = new FormData();
      data.append("picture", { uri, name: "image.jpg", type: "image/jpg" });
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: data,
      };
      const res = await fetch("http://google.co.uk", config);
      console.log(res.status);
      this.props.history.push("/results");
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission) {
      return (
        <View style={[Styles.page, { padding: 0 }]}>
          <Camera
            style={{ flex: 1, justifyContent: "flex-start" }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
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
                // onPress={() => {
                //   this.props.history.push("/results");
                // }}
                onPress={() => this.clickShutterButton()}
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
