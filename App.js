import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { DataTable} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'; 
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Button} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions ={{
        headerTitleAlign:"right",
            headerTintColor:'blue',
            headerStyle: {
              backgroundColor:'orange',

            }
      }

      }
      >
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={({ navigation }) => ({
          title: "Discount Application",
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor:'#12594a',
          },
          headerRight: () => (
            <Button
              title="HISTORY"
              onPress={() => navigation.navigate('historyPage')}
              color='blue'
            ><Text></Text></Button>
            
            )
        })}


         />


<Stack.Screen 
        name="historyPage" 
        component={historyPage}
        options={
          {
            title:" Discount History",
            headerTintColor:'white',
             headerStyle: {
               backgroundColor:'#12594a',

             },
        

          }
          
        }
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const  Home=({navigation})=> {

  const [OriginalPrice, setOriginalPrice] = useState("");
  const [DiscountPercentage, setDiscountPercentage] = useState("");
  let SavedAmount;
  let FinalPrice;
  let Error = "";

  const Calculate = () => {
    const OriginalP = parseFloat(OriginalPrice);
    const DiscountP = parseFloat(DiscountPercentage);
    if(OriginalPrice!=="" && DiscountPercentage!=="" && DiscountP<=100){
      FinalPrice = parseFloat(OriginalP - (OriginalP * DiscountP/100).toFixed(2));
      SavedAmount = parseFloat(OriginalP - FinalPrice);
    }
    else if (OriginalPrice!=="" && DiscountPercentage!==""){
      Error = "Discount cant be greater than 100"
    }
    else{}
  }

  return (
    <View style={styles.container}>
      {/* <Image
      style={{width: "50%", height: "40%"}} source={logo}
      /> */}
      <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop:20, marginLeft:"10%", marginRight:"10%" }}>
        <View style={{width: "60%"}}>
          <Text style={{ fontSize: 30, fontFamily: "lucida grande", fontWeight: 'bold', color:"#DFF1E8"}}>Discount Calculator</Text>
        </View>
        <View style={{width: "40%"}}>
          <Button
          title="Save"
          color="#E85050"
          accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>Original Price:</Text>
        <TextInput
        style={{ height: 40, color:"#DFF1E8", borderColor: '#2C302E', borderWidth: 3, borderRadius: 20, textAlign: "center", fontWeight: 'bold' }}
        value={OriginalPrice} 
        type="number"
        min="0"
        onChangeText={text => setOriginalPrice(text)}/>
      </View>
      <View style={{width: "40%"}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:"#DFF1E8" }}>Discount %:</Text>
        <TextInput
        style={{ height: 40, color:"#DFF1E8", borderColor: '#2C302E', borderWidth: 3, borderRadius: 20, textAlign: "center", fontWeight: 'bold'  }}
        value={DiscountPercentage}
        type="number"
        min="0"
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



const historyPage = ({navigation}) => {
  //var ar=route.params.history;
  //const [list,setList]=useState(ar);
  var list= ([])

  console.log(list);

  const removeItem =(index)=>{
    let NewArray = [...list];
    NewArray.splice(index, 1);
    setList(NewArray);

  }

  const clearItems =()=>{
    setList(c);

  }

  return (
    <View>
      <View>
      <TouchableOpacity   
        style={styles.clear}
        activeOpacity={0.2} 
        onPress={()=>{clearItems()}}
        >
        <Text style={styles.buttonText}>CLEAR</Text></TouchableOpacity>
      </View>
  
    <DataTable>
        <DataTable.Header>
            <DataTable.Title >S.No</DataTable.Title>
            <DataTable.Title >Price</DataTable.Title>
            <DataTable.Title >Discount</DataTable.Title>
            <DataTable.Title >Final Price</DataTable.Title>
            
        </DataTable.Header>
        
        {list.map(((values, index) =>
            <DataTable.Row>
                <DataTable.Cell >{index + 1}</DataTable.Cell>
                <DataTable.Cell >    {values[0]}</DataTable.Cell>
                <DataTable.Cell>{values[1]}% </DataTable.Cell>
                <DataTable.Cell numeric>{values[2]}</DataTable.Cell>
                <DataTable.Cell ><Button
                    title="X"          
                    onPress={() => removeItem(list.index)}></Button>
                </DataTable.Cell>
            </DataTable.Row>
        ))}
    </DataTable>
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


export default App;