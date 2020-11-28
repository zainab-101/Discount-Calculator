import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


export default function App() {

  const [OriginalPrice, setOriginalPrice] = useState("");
  const [DiscountPercentage, setDiscountPercentage] = useState("");

  let SavedAmount;
  let FinalPrice;
  const Calculate = () => {
    const OriginalP = parseFloat(OriginalPrice);
    const DiscountP = parseFloat(DiscountPercentage)/100;
    FinalPrice = OriginalP - (OriginalP * DiscountP).toFixed(2);
    SavedAmount = OriginalP - FinalPrice;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#2C302E"}}>Discount Calculator</Text>
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#2C302E" }}>Original Price:</Text>
        <TextInput
        style={{ height: 40, borderColor: '#2C302E', borderWidth: 3, borderRadius: 20 }}
        value={OriginalPrice} 
        onChangeText={text => setOriginalPrice(text)}/>
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#2C302E" }}>Discount %:</Text>
        <TextInput
        style={{ height: 40, borderColor: '#2C302E', borderWidth: 3, borderRadius: 20  }}
        value={DiscountPercentage}
        onChangeText={text => setDiscountPercentage(text)} />
      </View>
      <TouchableOpacity 
        style={{justifyContent: "space-between", width: "40%", marginTop:"5%"}}
        onPress={Calculate()}>
        <Text style={{textAlign:"center", fontWeight: 'bold', fontSize:25, color:"#404644", backgroundColor:"#24BA88", borderRadius: 20}}>Calculate</Text>
      </TouchableOpacity>
      
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#2C302E" }}>You Saved:</Text>
        {SavedAmount}
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#2C302E" }}>Final Price:</Text>
        {FinalPrice}
      </View>
      <StatusBar style="auto"/>
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
