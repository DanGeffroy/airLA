import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


export class Home extends React.Component {
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
                    YOLOOOOOOOOOO
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
  
    async componentDidMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
    }
  };