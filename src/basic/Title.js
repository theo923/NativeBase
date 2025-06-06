import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { TextPropTypes } from 'deprecated-react-native-prop-types';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Title extends Component {
  render() {
    return (
      <Text ref={c => (this._root = c)} numberOfLines={1} {...this.props} />
    );
  }
}

Title.propTypes = {
  ...TextPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledTitle = connectStyle(
  'NativeBase.Title',
  {},
  mapPropsToStyleNames
)(Title);
export { StyledTitle as Title };
