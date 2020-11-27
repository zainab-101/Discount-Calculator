import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop:20}}>
        <View style={{width: "40%"}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Original Prize:</Text>
          <TextInput
          style={{ height: 40, borderColor: 'Black', borderWidth: 3, borderRadius: 20  }}
          ></TextInput>
        </View>
        <View style={{width: "40%"}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Discount %:</Text>
          <TextInput
          style={{ height: 40, borderColor: 'Black', borderWidth: 3, borderRadius: 20  }}
          ></TextInput>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#177981",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
