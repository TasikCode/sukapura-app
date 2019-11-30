import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Thumbnail,
  Title,
} from 'native-base';
import {View, StatusBar} from 'react-native';
import NavIcons from '../../../containers/organism/NavIcons';

export default class ScreenSukapura extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fff', paddingHorizontal: 17}}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Body>
            <Title style={{color: '#000', paddingLeft: 12, fontWeight: 'bold'}}>
              Akun
            </Title>
          </Body>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#F0FFFF',
              padding: 12,
            }}>
            <Thumbnail source={require('../../../assets/dummy/ade.jpg')} />
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>
              Ade Nurrahman
            </Text>
            <Text style={{fontSize: 10, fontWeight: 'bold'}}>
              admin@sukapura.app
            </Text>
            <Button style={{backgroundColor: '#F0FFFF'}}>
              <Icon active name="close" />
            </Button>
          </View>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#AFEEEE'}}>
                <Icon active name="rocket" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#FFB6C1'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#FFE4B5'}}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
        <NavIcons />
      </Container>
    );
  }
}
