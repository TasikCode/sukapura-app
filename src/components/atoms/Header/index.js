import React, {Component} from 'react';
import {Header, Content, Button, Text} from 'native-base';
export default class ButtonRoundedExample extends Component {
  render() {
    return (
      <Button
        rounded
        dark
        style={{width: 70, height: 40, paddingLeft: 12, flex: 1}}>
        <Text style={{color: '#fff'}}>Dark</Text>
      </Button>
    );
  }
}
