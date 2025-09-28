import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native"

const HomeScreen = ({ navigation, route }) => {
  // const navigation = useNavigation();

  const { name, country } = route.params;

 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Text>Name: {name}</Text><Text>Country: {country}</Text>
      <Button title="Go to About" onPress={() => navigation.navigate("About", { name: "ali", country: "ksa" })} />
    </View>
  )
}

export default HomeScreen