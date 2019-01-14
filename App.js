import React from "react";
import Expo, { AppLoading } from "expo";
import { observer } from "mobx-react";

// Component
import HomePage from "./Components/HomePage";
import Stack from "./Navigation/Index";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false
    };
  }

  componentWillMount() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ fontsAreLoaded: true }));
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return <HomePage />;
  }
}

export default App;
