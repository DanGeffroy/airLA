import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import axios from 'axios';

export class Home extends React.Component {
 
    state = {
        villes : []
    }

    constructor(props){
        super(props);
        axios.get(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=234400034_071-001_qualite-de-lair-indice-atmo-pays-de-la-loire-2017&facet=ville&facet=date`)
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
          <Header />
          <Content>
            <Card>
              <CardItem header>
                <Text>DENIS?!</Text>
              </CardItem>
              <CardItem>
                <Body>
                    
                  <Text>
                  {this.state.villes.map(ville =>
                     ville.fields.ville
                  )}

                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>SWAGGGGGGg</Text>
              </CardItem>
           </Card>
          </Content>
        </Container>
      );
    }
  
   
  };