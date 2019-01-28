import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

export default class AddEmployee extends React.Component {
  static navigationOptions = {
    title: "Add Record"
  };
  state = {
    name: "",
    designation: ""
  };
  onSave = () => {
    this.props.addEmployee(this.state.name, this.state.designation);
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={addStyles.addContainer}
        behavior="padding"
        enabled
      >
        <View style={addStyles.addItem}>
          <Text style={[addStyles.textStyle, addStyles.addHeader]}>Add Record</Text>
          <View style={addStyles.addRow}>
            <Text>Name:</Text>
            <TextInput
              style={addStyles.input}
              autoCapitalize="words"
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View style={addStyles.addRow}>
            <Text>Designation:</Text>
            <TextInput
              style={addStyles.input}
              onChangeText={designation => this.setState({ designation })}
            />
          </View>
        </View>
        <Button title="Save" onPress={this.onSave} />
      </KeyboardAvoidingView>
    );
  }
}

addStyles = StyleSheet.create({
  addContainer: {
    padding: 20,
    backgroundColor: "powderblue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  addItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    paddingVertical: 20
  },
  addRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
    width: "100%",
    paddingHorizontal: 20
  },
  input: {
    width: "70%",
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: "grey"
  },
  textStyle: {
    fontSize: 30,
    color: "#494a4c",
    paddingLeft: 10,
    paddingRight: 10,
    textShadowColor: "#737477",
    textShadowOffset: { width: 1, height: 1 }
  },
  addHeader: {
    paddingBottom:20
  }
});
