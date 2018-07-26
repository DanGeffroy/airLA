import React from 'react';
import { StyleSheet,ScrollView, Linking} from 'react-native';
import {View,Divider,Caption, Button, Icon, Text} from '@shoutem/ui'
import axios from 'axios';
import CityViewer from './CityViewer.js'
import IndicatorViewer from './IndicatorViewer.js'

export class Home extends React.Component {
 
    state = {
        villes : []
    }
    apiUrl = `https://data.loire-atlantique.fr/api/records/1.0/search/?dataset=323266205_indice-atmo-previsionnel-agglomeration-nantaise`
    constructor(props){
        super(props);
        axios.get(this.apiUrl)
        .then(res => {     
            const villes = res.data.records;
            this.setState({ villes: villes });
        });
    }

    render() {
      return (
        <View styleName="flexible">
              {this.state.villes[0]? <CityViewer fields={this.state.villes[1].fields}/> : null}
              <ScrollView>
                <Divider styleName="section-header">
                  <Caption>Rapport détaillé</Caption>
                </Divider>
                {this.state.villes[0]? <IndicatorViewer fields={this.state.villes[1].fields}/> : null}
                  <Button styleName="full-width clear" onPress={() => Linking.openURL('https://github.com/DanGeffroy/airLA')}>
                    <Text>Link to the github repo</Text>
                    <Icon name="github" />
                  </Button>
              </ScrollView>
        </View>
      );
    }

};

const styles = StyleSheet.create({
  
});