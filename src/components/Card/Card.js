import React from "react";
import PropTypes from 'prop-types';
import {Colors} from 'themes'
import styled from 'styled-components'


const SCard= styled.div`
    background: ${({color})=> Colors[color]};
    border-radius: 16px;
    border: 1px solid ${Colors.borders};
    display: inline-block;
    position: relative;
    margin: 0.5rem;
    /* height: 300px;
    width: 300px; */

    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 8px rgba(0,0,0,0.24);
    }
`

function Card({
    color,
    children,
}) {
  return (
      <SCard color={color}>
         {children}
      </SCard>
  );
}

Card.propTypes = {
    // Children node to render
    children: PropTypes.node,
    // Color of the icon
    color: PropTypes.oneOf(Object.keys(Colors)),
}

Card.defaultProps = {
    color: 'secondary',
}

export default Card;