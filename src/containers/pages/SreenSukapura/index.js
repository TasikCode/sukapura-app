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
import {CardEcomOne, CardEcomThree} from 'react-native-card-ui';

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
          <CardEcomThree
            title={'Mie Ajam Nzo 777'}
            subTitle={'Mie Na Meuli,Hayamna Newak Sorangan'}
            price={'$200'}
            image={require('../../../assets/dummy/go-food-gm.jpg')} // OR {{uri:"http://......"}}
            buttonText={'Login'}
            buttonColor={'#ff2788'}
            onClickButton={() => alert('Maaf ,lembali lagi nanti')}
          />
        </Content>
      </Container>
    );
  }
}
