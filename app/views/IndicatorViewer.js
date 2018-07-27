import React from 'react';

import { StyleSheet } from 'react-native';
import { View,Text,Caption,Subtitle,Row,Divider,Icon} from '@shoutem/ui';

export default class IndicatorViewer extends React.Component {
 
    constructor(props){
        super(props);
    }
    renderRow(indicator){
      return (

        <Row>
        <View styleName="vertical">
          <View styleName="horizontal space-between">
            <Subtitle>{indicator.name} : {indicator.value}</Subtitle>
            <Caption><Icon name="equalizer" /></Caption>
          </View>
          <Text styleName="multiline">{indicator.description}</Text>
        </View>
      </Row>
      );
    }
    render() {
      return (
        <View>
           {this.renderRow({
             name : 'Particules fines (pm 10)',
             value: this.props.fields.pm10,
             description: `Elles sont dans leur ensemble désormais classées cancérigènes pour l'homme (groupe 1) par le Centre international de recherche sur le cancer (CIRC).`,
             date :this.props.fields.date,
           })}
          <Divider styleName="line" />
          {this.renderRow({
             name : 'Dioxyde de soufre (so2)',
             value: this.props.fields.so2,
             description: `Il s'agit d'un gaz incolore, dense et toxique, dont l'inhalation est fortement irritante.`,
             date :this.props.fields.date,
           })}
          <Divider styleName="line" />
          {this.renderRow({
             name : 'Ozone (o3)',
             value: this.props.fields.o3,
             description: `L'ozone est un polluant dans les basses couches de l'atmosphère (la troposphère) où il agresse le système respiratoire des animaux et peut brûler les végétaux les plus sensibles.`,
             date :this.props.fields.date,
           })}
          <Divider styleName="line" />
          {this.renderRow({
             name : 'Dioxyde d\'azote (no2)',
             value: this.props.fields.no2,
             description: `Le dioxyde d'azote est un polluant majeur de l'atmosphère terrestre produit par les moteurs à combustion interne et les centrales thermiques.`,
             date :this.props.fields.date,
           })}
       </View>
      );
    }
  };