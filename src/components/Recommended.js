import React from 'react';
import { Text, StyleSheet, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Recommended({cover, house, offer, onPress }) {
    
 return (
     <TouchableOpacity onPress={onPress}>
            <ImageBackground
        source={cover}
        style={styles.container}
        blurRadius={3}
   >
                <Text style={[styles.house, styles.shadow]}>
                {house}
                </Text>
                <Text style={[styles.description, styles.shadow]}>
                 {offer} OFF
                </Text>
            </ImageBackground>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 130,
        width: 230,
        marginRight: 20,
        borderRadius: 2,
        marginBottom: 40,
        opacity: 0.9,
        backgroundColor: '#000',
        marginLeft: 3,
        padding: 12,
        marginTop: 20
    },
    house:{
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        fontSize: 15
    },
    description:{
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
    },
    shadow:{
        textShadowOffset: {width:1, height:2},
        textShadowRadius: 3,
        textShadowColor: '#000'
    }
});