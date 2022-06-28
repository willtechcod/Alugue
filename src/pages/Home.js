import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import New from '../components/New';
import House from './../components/House';
import Recommended from '../components/Recommended';


import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();

 return (
   <ScrollView
    showsVerticalScrollIndicator={false}
    style={{backgroundColor:'#fff', }}
   >
       <View style={styles.header}>
          <View style={styles.inputArea}>
              <Feather name='search' size={24} color='#000' />
                <TextInput
                  placeholder='O que está procurando?'
                  style={styles.input}
                />
          </View>
       </View>
       <View style={styles.contentNew}>
          <Text style={styles.title} >Novidades</Text>
       </View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}} >
          <New
            cover={require('../assets/house1.jpg')}
            name='Casa De Praia'
            description="Casa Nova a uma quadra do mar, lugar seguro e monitorado 24horas."
            onPress={()=> navigation.navigate('Detail')}
          />
          <New
            cover={require('../assets/house2.jpg')}
            name='Pousada De Praia'
            description="Casa Nova a uma quadra do mar, lugar seguro e monitorado 24horas."
            onPress={()=> navigation.navigate('Detail')}
          />
          <New
            cover={require('../assets/house3.jpg')}
            name='Casa De Luxo SP'
            description="Casa Nova a uma quadra do mar, lugar seguro e monitorado 24horas."
            onPress={()=> navigation.navigate('Detail')}
          />
          <New
            cover={require('../assets/house4.jpg')}
            name='Mansão SC'
            description="Casa Nova a uma quadra do mar, lugar seguro e monitorado 24horas."
            onPress={()=> navigation.navigate('Detail')}
          />
       </ScrollView>
        <View style={{flexDirection:'row', marginBottom:10, alignItems: 'center'}}>
          <Text style={[styles.title, {marginTop: 20}]}>Próximo de Você</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
          <House
            cover={require('../assets/house5.jpg')}
            onPress={()=> navigation.navigate('Detail')}
          />
          <House
            cover={require('../assets/house2.jpg')}
            onPress={()=> navigation.navigate('Detail')}
          />
          <House
            cover={require('../assets/house1.jpg')}
            onPress={()=> navigation.navigate('Detail')}
          />
        </ScrollView>
          <Text style={[styles.title, {marginTop: 20}]}>
          Dica do dia
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            <Recommended
              cover={require('../assets/house1.jpg')}
              house='Casa Floripa'
              offer='20%'
              onPress={()=> navigation.navigate('Detail')}
            />
            <Recommended
              cover={require('../assets/house3.jpg')}
              house='Casa de praia'
              offer='35%'
              onPress={()=> navigation.navigate('Detail')}
            />
            <Recommended
              cover={require('../assets/house6.jpg')}
              house='Casa de luxo'
              offer='25%'
              onPress={()=> navigation.navigate('Detail')}
            />
          </ScrollView>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20
  },
  inputArea:{
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    width:'98%',
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal:10,
    fontSize:13,
    width: '90%'
  },
  contentNew:{
    flexDirection:'row',
    width:'100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});