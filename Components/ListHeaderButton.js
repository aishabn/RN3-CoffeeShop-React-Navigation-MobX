import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Icon } from "native-base";

class ListHeaderButton extends Component {
  render() {
    return (
      <Button
        EvilIcons
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
      >
        <Icon name="cart" />
      </Button>
    );
  }
}
export default ListHeaderButton;
