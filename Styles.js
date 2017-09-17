import { StyleSheet } from "react-native";

export const Colours = {
  cyan: "#31B5BE",
  blue: "#5B86E5",
};

export default Styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  button: {
    padding: 20,
    backgroundColor: "#31B5BE",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    shadowOffset:{  width: 0,  height: 4,  },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: Colours.cyan,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
  },
  headerText: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 100,
    color: "white",
  },
});
