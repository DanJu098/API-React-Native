import React,{useState,useEffect} from 'react';

import { StyleSheet, Text, View, FlatList, Image, ScrollView} from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const parsed = await response.json();
  callback(parsed.data);
  

}



export default function App() {
  const [Disney,setDisney] = useState([]);

  useEffect(()=>{

    request(setDisney);

  },[]);

  return (

    <View style={styles.container}>
    <ScrollView>

      <Text style={styles.titulo}>Disney Api</Text>

      <FlatList

      data={Disney}

      keyExtractor={(item)=> item.Disney}

      renderItem={({item})=>
      
      <View style={styles.container2}>
      <Text style={styles.texto}>

      Filmes:{'\n'}
      {item.films} {'\n'}

      Nome:{'\n'}
      {item.name} {'\n\n'}

      imageUrl:{'\n'}
      {item.imageUrl} {'\n\n\n'}

      Id:{'\n'}
      {item._id} {'\n'}

      </Text>
      </View>
      }
      />
    </ScrollView>
    </View>

  );

    }



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4040ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30

  },
    container2: {
    flex:2,
    backgroundColor: '#101084',
    borderRadius: 30,
    marginTop: 15,
    borderRadius:30

  },
  titulo:{
    color: 'white',
    textAlign: 'center',
    fontSize: 40
  },
  texto:{
  color: 'white',
   fontSize: 20,
  textAlign: 'center',
  marginTop: 20

  }

});