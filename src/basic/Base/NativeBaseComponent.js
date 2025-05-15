import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'native-base-shoutem-theme';

export default class NativeBaseComponent extends Component {
  static contextType = ThemeContext;

  getContextTheme() {
    return this.props.theme || this.context.theme;
  }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }
}
