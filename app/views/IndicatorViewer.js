import React from 'react';

import { View,Caption,Subtitle,Row,Divider,Icon,Button} from '@shoutem/ui';

export default class IndicatorViewer extends React.Component {
 
    constructor(props){
        super(props);
    }
    renderRow(indicator){
      return (

        <Row>
          <View styleName="vertical stretch space-between">
            <Subtitle>{indicator.name} : {indicator.value}</Subtitle>
            <Caption>{indicator.scale}</Caption>
          </View>
          <Button styleName="right-icon"><Icon name="about"  onPress={()=>this.props.navigate('detailsRT',{name:indicator.name,value:indicator.value,description:indicator.description})}/></Button>
      </Row>
      );
    }
    render() {
      return (
        <View>
           {this.renderRow({
             name : 'Particules fines (pm 10)',
             value: this.props.fields.pm10,
             description: `Les particules en suspension sont toutes les particules (solides ou en aérosols) portées par l'eau ou par l'air, quantifiables par filtration ou par d'autres procédés physiques. Elles sont dans leur ensemble désormais classées cancérigènes pour l'homme (groupe 1) par le Centre international de recherche sur le cancer (CIRC).`,
             date :this.props.fields.date,
             scale:'compris entre 0 et 10'
           })}
          <Divider styleName="line" />
          {this.renderRow({
             name : 'Dioxyde de soufre (so2)',
             value: this.props.fields.so2,
             description: `Le dioxyde de soufre, autrefois également appelé anhydride sulfureux, est un composé chimique de formule SO2. Il s'agit d'un gaz incolore, dense et toxique, dont l'inhalation est fortement irritante. Il est libéré dans l'atmosphère terrestre par les volcans et par de nombreux procédés industriels, ainsi que par la combustion de certains charbons, pétroles et gaz naturels non désulfurés. L'oxydation du dioxyde de soufre, le plus souvent en présence de catalyseurs tels que le dioxyde d'azote NO2, conduit au trioxyde de soufre SO3 et à l'acide sulfurique H2SO4, d'où la formation de pluies acides. Elle a pour conséquence une inflammation de l'appareil respiratoire.`,
             date :this.props.fields.date,
             scale:'compris entre 0 et 10'
           })}
          <Divider styleName="line" />
          {this.renderRow({
             name : 'Ozone (o3)',
             value: this.props.fields.o3,
             description: `L'ozone est naturellement présent dans l'atmosphère terrestre, formant dans la stratosphère une couche d'ozone entre 13 et 40 km d'altitude qui intercepte plus de 97 % des rayons ultraviolets du Soleil, mais est un polluant dans les basses couches de l'atmosphère (la troposphère) où il agresse le système respiratoire des animaux et peut brûler les végétaux les plus sensibles. Cet oxydant énergique agresse les cellules vivantes et peut être responsable de phénomènes de corrosion accélérée de polymères (craquelage d'élastomères par l'ozone).`,
             date :this.props.fields.date,
             scale:'compris entre 0 et 10'
           })}
          <Divider styleName="line" />
          {this.renderRow({
             name : 'Dioxyde d\'azote (no2)',
             value: this.props.fields.no2,
             description: `Le dioxyde d'azote est un composé chimique de formule NO2. Il s'agit d'un gaz brun-rouge toxique suffocant à l'odeur âcre et piquante caractéristique. C'est un précurseur de la production industrielle de l'acide nitrique HNO3 et un polluant majeur de l'atmosphère terrestre produit par les moteurs à combustion interne et les centrales thermiques ; il est responsable à ce titre du caractère eutrophisant des pluies acides non soufrées (le NO2 combiné à l'ozone troposphérique anthropique forme des nitrates très solubles dans l'eau). Il est aussi responsable de la présence d'acide nitrique (où ce dernier se forme par hydratation du NO2)`,
             date :this.props.fields.date,
             scale:'compris entre 0 et 10'
           })}
       </View>
      );
    }
  };