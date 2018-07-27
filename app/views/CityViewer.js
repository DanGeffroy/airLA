import React from 'react';
import { StyleSheet } from 'react-native';
import { Tile,Title ,Caption,Overlay,Subtitle,ImageBackground} from '@shoutem/ui';

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
        <ImageBackground
        styleName="large-banner"
        source={{ uri:'https://images.unsplash.com/photo-1490277586285-9e4a6c6d6688?ixlib=rb-0.3.5&s=fc84a2683fc0ee96b65634fdb5263fb3&auto=format&fit=crop&w=1613&q=80'}}
        >
            <Tile styleName="text-centric">   
                <Title styleName="md-gutter-bottom">{this.props.fields.ville}</Title>
                <Caption>{this.props.mode}</Caption>
                <Overlay styleName="solid-dark">
                    <Subtitle styleName="sm-gutter-horizontal">{this.isPollutionOK(this.props.fields.indice)}</Subtitle>
                </Overlay>
            </Tile>
        </ImageBackground>
      );
    }
   
  };

  const styles = StyleSheet.create({
    whiteText: {
     color: 'white'
    },
  });