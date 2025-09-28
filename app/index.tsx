import Box from "@/components/Box";
import Welcome from "@/components/Welcome";
import { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Platform, Pressable, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";



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

const Index = () => {

  const [isOpen, setIsOpen] = useState(true);
  return (
    // <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

      {/* {
        users.map((user, index) => {
          console.log(index)
          return (
            <View key={index} style={styles.card}>
              <Text>{user.name}</Text>
              <Text>{user.age}</Text>
            </View>
          )
        })
      } */}

      {/* <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            console.log(index)
            return (
              <View key={index} style={styles.card}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
              </View>
            )
          }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "red" }} />
          )}
          ListEmptyComponent={() => (
            <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>No data</Text>
          )}
          ListHeaderComponent={() => (
            <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Header</Text>
          )}
          ListFooterComponent={() => (
            <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Footer</Text>
          )}
        />
      </View> */}

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SectionList
          sections={DATA}
          keyExtractor={(item) => item + Math.random()}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item}</Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#ccc" }} />
          )}
          ListHeaderComponent={() => (
            <Text style={styles.listHeader}>Users List</Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.listFooter}>End of List</Text>
          )}
        />
      </View>

      <SafeAreaView>
        <Text style={{ fontSize: 30, color: Platform.OS === 'ios' ? 'blue' : 'red', textAlign: 'center', fontWeight: 'bold' }}>Hello inside safe area 👋</Text>
      </SafeAreaView>
      <Pressable
        onPress={() => { console.log('clickP') }}
        onPressIn={() => { console.log('clickIn') }}
        onPressOut={() => { console.log("clickOut") }}
        onLongPress={() => { console.log("clicklong") }}
        style={{ backgroundColor: 'red', width: 100, height: 100 }}>
        <Text style={styles.text}>Hello World</Text>
      </Pressable>
      <Button title="Click" color={'green'} onPress={() => { console.log('click') }} />
      <Image source={require('@/assets/images/react-logo.png')} style={{ width: 50, height: 50 }} />
      <ImageBackground source={require('@/assets/images/react-logo.png')} style={{ width: 200, height: 200 }} >
        <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>gemy</Text>
      </ImageBackground>
      <View style={{ width: 100, backgroundSize: 'cover', height: 100, backgroundColor: 'blue' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'green' }}></View>
      <Text style={styles.text}>Hello World9</Text>
      <Image source={require('@/assets/images/react-logo.png')} style={{ width: 50, height: 50 }} />
      <ImageBackground source={require('@/assets/images/react-logo.png')} style={{ width: 200, height: 200 }} >
        <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>gemy</Text>
      </ImageBackground>
      <View style={{ width: 100, backgroundSize: 'cover', height: 100, backgroundColor: 'blue' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'green' }}></View>
      <Text style={styles.text}>Hello World</Text>
      {/* have a wifi logo and time */}
      <StatusBar backgroundColor="red" barStyle="dark-content" />
      <Button title="Realod page" onPress={() => { window.location.reload() }} color="red" />
      {/* <Modal visible={isOpen} animationType="slide">
        <Text>Modal</Text>
        <Button title="Close" onPress={() => { setIsOpen(false) }} />
      </Modal> */}
      {/* // loading */}
      <ActivityIndicator size="large"
        color="blue"
        animating={true} // control view or hidden
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
      {/* // alert */}
      <Button title="Alert"
        onPress={() => {
          Alert.alert('Are you sure',
            'Are you sure you want to delete this item?',
            [{ text: 'Cancel', onPress: () => { console.log('Cancel') } },
            { text: 'OK', onPress: () => { console.log('OK') } }])
        }} />

      <Welcome name="gemy" country="egypt" />

      <View style={styles.box}>
        <Text style={styles.text}>hello world</Text>
      </View>

      <View style={styles.container}>
        <Box style={{ backgroundColor: 'red', flex: 1 }}></Box>
        <Box style={{ backgroundColor: 'yellow', flex: 2 }}></Box>
        <Box style={{ backgroundColor: 'blue', flex: 1 }}></Box>
        <Box style={{ backgroundColor: 'green', flex: 1 }}></Box>
      </View>


    </ScrollView>
    // </View >
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'orange',
    width: 200,
    height: 200,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  container: {
    flex: 1,
    height: 400,
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  text: {
    fontSize: 30,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'blue'
      }
    }),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'green',
    width: "auto",
    height: 200,
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
   item: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: 10,
  },
  listHeader: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  listFooter: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: "gray",
  },

});


export default Index