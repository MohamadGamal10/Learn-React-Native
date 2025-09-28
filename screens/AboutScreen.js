import { View, Text, Button } from "react-native"

const AboutScreen = ({ navigation, route }) => {

    const { name, country } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Screen</Text>
      <Text>Name: {name}</Text><Text>Country: {country}</Text>
      <Button title="update country" onPress={() => navigation.setParams({ country: "jordon" })} color="red" />
    </View>
  )
}

export default AboutScreen