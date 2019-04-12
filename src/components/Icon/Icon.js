import React from "react";
import PropTypes from 'prop-types';
import {Colors, Dimensions} from 'themes'
import Styled from './styles'

function Icon({
    iconName,
    color,
    size,
}) {
  return (
      <Styled.Icon size={size}>
        <i class="material-icons">
            {iconName || 'close'}
        </i>
      </Styled.Icon>
  );
}

Icon.propTypes = {
    // Name of one of the icons of collection themes/Icons
    iconName: PropTypes.string.isRequired,
    // Color of the icon
    color: PropTypes.string,
    // Size of the icon
    size: PropTypes.oneOf(Object.keys(Dimensions.IconSize))
}

Icon.default = {
    color: Colors.iconDefault,
    size: 'sm',
}

export default Icon;