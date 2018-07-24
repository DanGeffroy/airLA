import React from 'react';
import { Container, Header, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import {  H1 } from 'native-base';

import axios from 'axios';
import CityViewer from './CityViewer.js'
import IndicatorViewer from './IndicatorViewer.js'

export class Home extends React.Component {
 
    state = {
        villes : []
    }

    constructor(props){
        super(props);
        axios.get(`https://data.loire-atlantique.fr/api/records/1.0/search/?dataset=323266205_indice-atmo-previsionnel-agglomeration-nantaise`)
        .then(res => {
            console.log(res)
            const villes = res.data.records;
            this.setState({ villes: villes });
            console.log(this.state.villes)
        });
    }
    async componentDidMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
      }
    render() {
      return (

        <Container>
            <Grid>
              <Row style={[{ backgroundColor: '#ffca25'},styles.centered]}>
                {this.state.villes[0]? <CityViewer fields={this.state.villes[1].fields}/> : null}
              </Row>
              <H1 style={[{ backgroundColor: '#5ddf88' ,color:'white',textAlign:'right',paddingRight:30}]}>Rapport détaillé</H1>
              <Row style={[{ backgroundColor: '#5ddf88' }]}>
                {this.state.villes[0]? <IndicatorViewer fields={this.state.villes[1].fields}/> : null}
              </Row>
            </Grid>
        </Container>
      );
    }

};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});