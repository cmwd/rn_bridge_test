//  Created by react-native-create-bridge

import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

const PartyUI = requireNativeComponent('PartyUI', PartyUIView);

export default class PartyUIView extends Component {
  render() {
    return <PartyUI {...this.props} />;
  }
}

PartyUIView.propTypes = {};
