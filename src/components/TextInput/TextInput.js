import React from 'react'
import PropTypes from 'prop-types'
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'


const SInput = styled.input`
  border: 0px solid;
  padding: 0px;
  margin: 12px 14px 12px 14px;
  font-weight: ${ ({typography}) => Dimensions.Fonts[typography].width };
  font-size: ${ ({typography}) => Dimensions.Fonts[typography].size };
  line-height: ${ ({typography}) => Dimensions.Fonts[typography].lineHeight };
  /* background-color: #0000; */
  ${({fullWidth}) => fullWidth && `width: ${100}%`}

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
    typography,
    fullWidth,
    ...other
}) {

  return (
    <SInput
      value={value}
      typography={typography}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      {...other}/>
  )
}

TextInput.propTypes = {
    // Input value
    value: PropTypes.string,
    // Placeholder value
    placeholder: PropTypes.string,
    // Callback when text change
    onChange: PropTypes.func,
    // Select one of (placeholder, body1, body2, subtitle2, subtitle1, title)
    typography : PropTypes.oneOf(Object.keys(Dimensions.Fonts)),
    // Define if input should take full width
    fullWidth: PropTypes.bool,
}

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => {},
    typography: 'title',
    fullWidth: true,
}

export default TextInput
