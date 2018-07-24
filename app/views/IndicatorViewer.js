import React from 'react';
import { H2 } from 'native-base';
import { Container, Header, Content, Button, Text ,Badge} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export default class IndicatorViewer extends React.Component {
 

    constructor(props){
        super(props);
    }

    render() {
      return (
        <View style={[styles.centered,styles.paddingTopView]}>
        
        <Row>
        <Text style={[styles.whiteText]}>Particules fines (pm 10) :  </Text>
          <Badge info primary>
            <Text>{this.props.fields.pm10}</Text>
          </Badge>
        </Row>
        <Row>
          <Text style={[styles.whiteText]}>Dioxyde de soufre (so2) : </Text>
            <Badge info primary>
              <Text>{this.props.fields.so2}</Text>
            </Badge>
        </Row>
        <Row>
        <Text style={[styles.whiteText]}>Ozone (o3) : </Text>
          <Badge info primary>
            <Text>{this.props.fields.o3}</Text>
          </Badge>
        </Row>
        <Row>
        <Text style={[styles.whiteText]}>Dioxyde d'azote (no2) :</Text>
          <Badge info primary>
            <Text>{this.props.fields.no2}</Text>
          </Badge>
        </Row>
       </View>
      );
    }
  };

  const styles = StyleSheet.create({
    whiteText: {
     color: 'white'
    },
    paddingTopView:{
      paddingTop: 40
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });