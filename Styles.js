import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    padding: 10,

  },
  button: {
    padding: 20,
    backgroundColor: "#31B5BE",
    borderRadius: 30,
    shadowOffset:{  width: 0,  height: 4,  },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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
  },
});
