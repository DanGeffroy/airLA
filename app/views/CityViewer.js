import React from 'react';
import { H1,H3,Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';



export default class Home extends React.Component {
 

    constructor(props){
        super(props);
    }
    isPollutionOK(indice){
        returnMessage = ""
        if(indice<5){
            returnMessage = "très bonne à bonne "
        }
        else if(indice < 8){
            returnMessage = "moyenne à médiocre"
        }
        else{
            returnMessage = "mauvaise à tres mauvaise"
        }
        return returnMessage

    }
    render() {
      return (
        <View>
            <H1 style={[styles.whiteText]}>{this.props.fields.ville}</H1>
            <H3 style={[styles.whiteText]}>Indice de polution : {this.props.fields.indice}</H3>
            <Text style={[styles.whiteText]}>La qualitée de l'aire est aujourd'hui</Text>
            <Text style={[styles.whiteText]}>{this.isPollutionOK(this.props.fields.indice)}</Text>
        </View>
      );
    }
   
  };

  const styles = StyleSheet.create({
    whiteText: {
     color: 'white'
    },
  });