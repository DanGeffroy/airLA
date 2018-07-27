import React from 'react';
import { StyleSheet} from 'react-native';
import { Row,Heading,Subtitle,Text,View} from '@shoutem/ui';

export default class Details extends React.Component {
 
    static navigationOptions = {
      
    }
    constructor(props){
        super(props);
    }
    
    render() {
      return (
        <Row>
            
            <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Heading>{this.props.navigation.state.params.name}</Heading>
                <Subtitle>Indice : {this.props.navigation.state.params.value}/10</Subtitle>
            </View>
            <Text styleName="multiline">{this.props.navigation.state.params.description}</Text>
            </View>
        </Row>

       
      );
    }
   
  };

  const styles = StyleSheet.create({

  });