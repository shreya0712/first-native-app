import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
    width: "100%",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey"
  },
  textStyle: {
    fontSize: 30,
    color: "#494a4c",
    paddingLeft: 10,
    paddingRight: 10,
    textShadowColor: "lightgray",
    textShadowOffset: { width: 1, height: 1 }
  },
  textSmall: {
    fontSize: 15
  },
  noDataText: {
    textAlign: "center"
  },

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

  addHeader: {
    paddingBottom: 20
  }
});
