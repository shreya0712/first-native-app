import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/Home";
import AddEmployee from "./src/AddEmployee";

class App extends Component {
  state = {
    employees: []
  };
  addEmployee = (name, designation) => {
    const newEmployee = {
      key: (this.state.employees.length + 1).toString(),
      name,
      designation
    };
    this.setState(prevState => ({
      employees: [...prevState.employees, newEmployee]
    }));
  };
  render() {
    const MainScreenNavigator = mainScreenNavigator(
      this.state,
      this.addEmployee
    );
    const AppContainer = createAppContainer(MainScreenNavigator);
    return <AppContainer />;
  }
}

const mainScreenNavigator = (value, addEmployee) =>
  createStackNavigator(
    {
      Home: {
        screen: props => <HomeScreen {...props} {...value} />,
        navigationOptions: () => ({
          title: "Home"
        })
      },
      Add: {
        screen: props => (
          <AddEmployee {...props} {...value} addEmployee={addEmployee} />
        ),
        navigationOptions: () => ({
          title: "Add Records"
        })
      }
    },
    {
      initialRouteName: "Home"
    }
  );

export default App;
