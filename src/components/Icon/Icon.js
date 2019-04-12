import React from "react";
import PropTypes from 'prop-types';
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'


const SIcon= styled.div`
    width: fit-content;
    height: fit-content;
    i {
        font-size: ${({size}) => Dimensions.IconSize[size]};
        color: ${({color}) => color};
    }
`


function Icon({
    iconName,
    color,
    size,
}) {
  return (
      <SIcon size={size}  color={color}>
        <i className="material-icons">
            {iconName || 'close'}
        </i>
      </SIcon>
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
    size: Dimensions.IconSize.default,
}

export default Icon;