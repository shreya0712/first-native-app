import React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { styles } from "../styles/styles"

export default class AddEmployee extends React.Component {
  // static navigationOptions = {
  //   title: "Add Record"
  // };
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
        style={styles.addContainer}
        behavior="padding"
        enabled
      >
        <View style={styles.addItem}>
          <Text style={[styles.textStyle, styles.addHeader]}>Add Record</Text>
          <View style={styles.addRow}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="words"
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View style={styles.addRow}>
            <Text>Designation:</Text>
            <TextInput
              style={styles.input}
              onChangeText={designation => this.setState({ designation })}
            />
          </View>
        </View>
        <Button title="Save" onPress={this.onSave} />
      </KeyboardAvoidingView>
    );
  }
}
