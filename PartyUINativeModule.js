//  Created by react-native-create-bridge

import { NativeModules } from 'react-native';

const { PartyUI } = NativeModules;

export default {
  exampleMethod() {
    return PartyUI.exampleMethod();
  },

  hello(...args) {
    console.log(args);
    return PartyUI.hello(...args);
  },

  EXAMPLE_CONSTANT: PartyUI.EXAMPLE_CONSTANT
};
