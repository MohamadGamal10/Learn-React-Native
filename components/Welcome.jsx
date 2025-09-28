import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  textName: {
    color: "orange",
  },
  textCountry: {
    color: "red",
  },
});

const Welcome = ({ name, country }) => {
  return (
    <View>
      <Text style={[styles.text, styles.textName]}>
        Welcome your name is {name}
      </Text>
      <Text style={[styles.text, styles.textCountry]}>
        and your country is {country}
      </Text>
    </View>
  );
};

export default Welcome;
