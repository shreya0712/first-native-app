import React from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    console.log(this.props.employees);
    return (
      <View style={styles.homeContainer}>
        {this.props.employees && this.props.employees.length !== 0 ? (
          <View style={styles.listContainer}>
            <FlatList
              data={this.props.employees}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                  <Text style={[styles.textStyle, styles.textSmall]}>{item.designation}</Text>
                </View>
              )}
            />
          </View>
        ) : (
          <View style={styles.noItem}>
            <Text style={[styles.textStyle, styles.noDataText]}>No Existing Records Found</Text>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="Add Record"
            onPress={() => this.props.navigation.navigate("Add")}
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}
styles = StyleSheet.create({
  homeContainer: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "powderblue",
    width: "100%",
    height: " 100%",
    flex: 1
  },
  listContainer: {
    flex: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10
  },
  noItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 10,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10
  },
  buttonContainer: {
    flex: 1,
    width: "100%"
  },
  button: {
    width: "100%",
    borderRadius: 10
  },
  item: {
    padding: 10,
    // alignItems: "flex-start",
    width: "100%",
    borderBottomWidth : StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey"
  },
  textStyle: {
    fontSize: 30,
    color: "#494a4c",
    paddingLeft: 10,
    paddingRight: 10,
    textShadowColor: "lightgray",
    textShadowOffset: { width: 1, height: 1 },
  },
  textSmall: {
    fontSize:15
  },
  noDataText: {
    textAlign: "center",
  }
});
