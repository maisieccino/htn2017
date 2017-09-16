import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Camera, Permissions } from "expo";
import { NativeRouter, Route } from "react-router-native";

import CameraPage from "./CameraPage";
import ResultsPage from "./ResultsPage";

const App = () =>
    <NativeRouter style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Route path="/camera" component={CameraPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/" exact component={CameraPage} />
      </View>
    </NativeRouter>;

export default App;
