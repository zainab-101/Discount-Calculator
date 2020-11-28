import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import logo from './assets/logo.jpg'; 
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';


export default function App() {

  const [OriginalPrice, setOriginalPrice] = useState("");
  const [DiscountPercentage, setDiscountPercentage] = useState("");

  let SavedAmount;
  let FinalPrice;
  let Error="";
  const Calculate = () => {
    const OriginalP = parseFloat(OriginalPrice);
    const DiscountP = parseFloat(DiscountPercentage);
    if(DiscountP<100){
      FinalPrice = parseFloat(OriginalP - (OriginalP * DiscountP/100).toFixed(2));
      SavedAmount = parseFloat(OriginalP - FinalPrice);
    }
    else{
      Error = "Discount greater than 100";
    }
  }

  return (
    <View style={styles.container}>
      <Image
      style={{width: "50%", height: "40%"}} source={logo}
      />
      <View>
        <Text style={{ fontSize: 40, fontFamily: "lucida grande", fontWeight: 'bold', color:"#DFF1E8"}}>Discount Calculator</Text>
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>Original Price:</Text>
        <TextInput
        style={{ height: 40, color:"#DFF1E8", borderColor: '#2C302E', borderWidth: 3, borderRadius: 20, textAlign: "center", fontWeight: 'bold' }}
        value={OriginalPrice} 
        keyboardType='numeric'
        onChangeText={text => setOriginalPrice(text)}/>
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>Discount %:</Text>
        <TextInput
        style={{ height: 40, color:"#DFF1E8", borderColor: '#2C302E', borderWidth: 3, borderRadius: 20, textAlign: "center", fontWeight: 'bold'  }}
        value={DiscountPercentage}
        keyboardType='numeric'
        onChangeText={text => setDiscountPercentage(text)} />
      </View>
      <Text value={Calculate()} style={{ fontSize: 30, fontFamily: "lucida grande", fontWeight: 'bold', color:"#DFF1E8"}}>After Discount:</Text>
      
      <View style={{width: "40%", color:"#DFF1E8"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>You Saved: {SavedAmount}</Text>
        
      </View>
      <View style={{width: "40%", color:"#DFF1E8"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>Final Price: {FinalPrice}</Text>
        
      </View>
      <View style={{width: "40%", color:"#D80707"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>Error Message: {Error}</Text>
        
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
