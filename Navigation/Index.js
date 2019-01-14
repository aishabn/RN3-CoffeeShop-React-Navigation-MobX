import { createStackNavigator, createAppContainer } from "react-navigation";

import ListPage from "../Components/CoffeeList";
import Cart from "../Components/CoffeeCart";
import DetailPage from "../Components/CoffeeDetail";
import LoginPage from "../Components/Login";

const Stack = createStackNavigator(
  {
    Login: LoginPage,
    CoffeeList: ListPage,
    CoffeeDetail: DetailPage,
    CoffeeCart: Cart
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(Stack);

export default AppContainer;
