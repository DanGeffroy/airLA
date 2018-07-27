import React from 'react';
import { StyleSheet,ScrollView, Linking,View} from 'react-native';
import {Button, Icon, Text,  DropDownMenu,Screen} from '@shoutem/ui'
import axios from 'axios';
import CityViewer from './CityViewer.js'
import IndicatorViewer from './IndicatorViewer.js'

export class Home extends React.Component {
    static navigationOptions = {
      header:null
    }
    state = {
        villes : [],
        mods:[{
          id:'today',
          name:'Aujourd\'hui',
          value:0,
          longtext:'La qualitée de l\'air aujourd\'hui est'
        },{
          id:'preview',
          name:'Demain',
          value:1,
          longtext:'La qualitée de l\'air demain est'
        }]
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
      const {navigate}=this.props.navigation
      const selectedMod = this.state.selectedMod || this.state.mods[0];

      return (
        <Screen>
              {this.state.villes[0]? <CityViewer mode={selectedMod?selectedMod.longtext:this.state.mods[0].longtext} fields={this.state.villes[selectedMod?selectedMod.value:this.state.mods[0].value].fields}/> : null}
              <ScrollView>
         
                <DropDownMenu
                  styleName="horizontal"
                  options={this.state.mods}
                  selectedOption={selectedMod ? selectedMod : this.state.mods[0]}
                  onOptionSelected={(mod) => this.setState({ selectedMod: mod })}
                  titleProperty="name"
                  valueProperty="mods"
                />
              
                {this.state.villes[0]? <IndicatorViewer navigate={navigate} fields={this.state.villes[selectedMod?selectedMod.value:this.state.mods[0].value].fields}/> : null}
                  
              </ScrollView>
              <View style={styles.fixedBottom}>
                    <Button styleName="full-width clear" onPress={() => Linking.openURL('https://github.com/DanGeffroy/airLA')}>
                      <Text>Link to the github repo</Text>
                      <Icon name="github" />
                    </Button>
                  </View>
        </Screen>
      );
    }

};

const styles = StyleSheet.create({
  fixedBottom:{
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});