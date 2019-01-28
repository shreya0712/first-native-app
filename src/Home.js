import React from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";
import { styles } from "../styles/styles"


export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: "Home"
//   };
  render() {
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
