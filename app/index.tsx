import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const users = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 18 + (i % 30),
}));

const DATA = [
    {
        title: "A",
        data: ["Ahmed", "Amr", "Aya"],
    },
    {
        title: "B",
        data: ["Basma", "Badr", "Bahaa"],
    },
    {
        title: "C",
        data: ["Cairo", "Carla"],
    },
];

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                initialParams={{ name: "Ahmed", country: "Egypt" }}
                options={{
                    title: "Home Screen",
                    headerStyle: { backgroundColor: "orange", borderBottomWidth: 10, borderBottomColor: "red" },
                    headerTintColor: "white",
                    headerRight: () => <Text>Right</Text>,
                    headerLeft: () => <Text>Left</Text>,
                    headerTitleAlign: "center",
                    headerSearchBarOptions: {
                        placeholder: "Search",
                        onChangeText: (text) => {
                            console.log("change", text);
                        },
                        onSubmitEditing: (text) => {
                            console.log("submit", text);
                        },
                        onClose: () => {
                            console.log("close");
                        },
                        onOpen: () => {
                            console.log("open");
                        },
                    },
                }}
            />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
};

export default Index;