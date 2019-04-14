import React from "react";
import PropTypes from 'prop-types';
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'


const SCard= styled.div`
    background-color: ${({color})=> Colors[color]};
    border-radius: ${Dimensions.BorderRadius};
    border: 1px solid ${Colors.borders};
    display: flex;
    position: relative;
    margin: 0.5rem;

    ${({elevation}) => elevation && `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px ${elevation}px rgba(0,0,0,0.24)`};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
      ${({elevation}) => !elevation && `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 8px rgba(0,0,0,0.24)`};
    }
`

function Card({
    color,
    children,
    elevation,
    ...other
}) {
  return (
      <SCard
        color={color}
        elevation={elevation}
        {...other}>
         {children}
      </SCard>
  );
}

Card.propTypes = {
    // Children node to render
    children: PropTypes.node,
    // Color of the icon
    color: PropTypes.oneOf(Object.keys(Colors)),
    // Elevation of card
    elevation: PropTypes.number,
}

Card.defaultProps = {
    color: 'secondary',
    elevation: 0,
}

export default Card;
