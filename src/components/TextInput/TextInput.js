import React from 'react'
import PropTypes from 'prop-types'
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'


const SInput = styled.input`
  border: 0px solid;
  padding: 0px;
  margin: 12px 14px 12px 14px;
  font-weight: ${ ({type}) => Dimensions.Fonts[type].width };
  font-size: ${ ({type}) => Dimensions.Fonts[type].size };
  line-height: ${ ({type}) => Dimensions.Fonts[type].lineHeight };

  &:focus {
      outline:0;
  }

  &::-webkit-input-placeholder {
      color: ${Colors.placeholder};
      font-weight: ${ Dimensions.Fonts.placeholder.width };
      font-size: ${ Dimensions.Fonts.placeholder.size };
      line-height: ${ Dimensions.Fonts.placeholder.lineHeight };
  }

  &::-moz-placeholder {
      color: ${Colors.placeholder};
      font-weight: ${ Dimensions.Fonts.placeholder.width };
      font-size: ${ Dimensions.Fonts.placeholder.size };
      line-height: ${ Dimensions.Fonts.placeholder.lineHeight };  }

  &::-ms-placeholder {
      color: ${Colors.placeholder};
      font-weight: ${ Dimensions.Fonts.placeholder.width };
      font-size: ${ Dimensions.Fonts.placeholder.size };
      line-height: ${ Dimensions.Fonts.placeholder.lineHeight };  }

  &::placeholder {
      color: ${Colors.placeholder};
      font-weight: ${ Dimensions.Fonts.placeholder.width };
      font-size: ${ Dimensions.Fonts.placeholder.size };
      line-height: ${ Dimensions.Fonts.placeholder.lineHeight };  }
`

function TextInput({
    value,
    placeholder,
    onChange,
    type,
}) {
  return (
    <SInput
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder} />
  )
}

TextInput.propTypes = {
    // Input value
    value: PropTypes.string,
    // Placeholder value
    placeholder: PropTypes.string,
    // Callback when text change
    onChange: PropTypes.func,
    //
    type : PropTypes.oneOf(Object.keys(Dimensions.Fonts))
}

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => {},
    type: 'title',
}

export default TextInput
