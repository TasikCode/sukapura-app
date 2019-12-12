import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
} from 'native-base';
import {StatusBar, View, Text, Image} from 'react-native';
import NavIcons from '../../../containers/organism/NavIcons';

export default class Inbox extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fff', paddingHorizontal: 17}}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Body>
            <Title style={{color: '#000', paddingLeft: 12, fontWeight: 'bold'}}>
              Inbox
            </Title>
          </Body>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
            Teu acan aya pesenan, Euy
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', textAlign: 'center'}}>
            Kuuy Aah...Pesenkeun Katuangana!
          </Text>
        </View>
        <NavIcons />
      </Container>
    );
  }
}
