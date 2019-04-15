import React from "react";
import PropTypes from 'prop-types';
import {Colors} from 'themes'
import styled from 'styled-components'


const SContainer= styled.div`
  .round {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }

  .round label {
    border: 2px solid ${Colors.borders};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content: center;
    height: 24px;
    width: 24px;
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    width: 12px;
    margin-bottom: 4px;
    opacity: 0;
    transform: rotate(-45deg);
  }

  .round input[type="checkbox"] {
    visibility: hidden;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: ${Colors.success};
    border-color: ${Colors.success};
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  #checkbox {
    position: absolute;
  }
`

function Done({
  checked,
  onChange,
  ...other
}) {
  return (
    <SContainer {...other}>
      <div class="round">
        <input type="checkbox" id="checkbox" checked={checked} onChange={onChange}/>
        <label for="checkbox"></label>
      </div>
    </SContainer>
  );
}

Done.propTypes = {
  // Define if checkbox is checked
  checked: PropTypes.bool,
  // Invoked when checked change
  onChange: PropTypes.func
}

Done.defaultProps = {
  onChange: console.log(`Checked invoked`),
  checked: false
}

export default Done;
