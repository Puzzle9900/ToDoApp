import React from "react";
import PropTypes from 'prop-types';
import {Colors} from 'themes'
import styled from 'styled-components'


const SButton = styled.button`
    margin: 16px;
    padding: 8px;
    border: 0px;
    border-radius: 50%;
    background-color: ${Colors.clear};
    &:hover {
        background-color: ${Colors.hover};
        cursor: pointer;
    };
    &:focus {
        outline:0;
    }
`

function IconButton({
    children,
    onClick,
    ...others
}) {
  return (
     <SButton onClick={onClick} ariaLabel={'Clear'} {...others}>
         {children}
    </SButton>
  );
}

IconButton.propTypes = {
    // Icon component to render icon
    children: PropTypes.node,
    // Callback function when button clicked
    onClick: PropTypes.func.isRequired,
}

IconButton.defaultProps = {
}

export default IconButton;