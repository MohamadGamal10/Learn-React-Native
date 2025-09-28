import { StyleSheet, View } from "react-native";

const Box = ({ style }) => {
  return <View style={[styles.box, style]}></View>;
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10,
  },
});

export default Box;
