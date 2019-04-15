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
    margin-left: -14px;
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

  .round label {
    ${({checked}) => checked && `background-color: ${Colors.success}`}
    ${({checked}) => checked &&  `border-color: ${Colors.success}`}
  }

  .round label:after {
    ${({checked}) => checked && `opacity: 1`}
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
    <SContainer checked={checked} {...other}>
      <div class="round">
        <label>
          <input type="checkbox" checked={checked} onChange={onChange}/>
        </label>
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
  checked: true
}

export default Done;
