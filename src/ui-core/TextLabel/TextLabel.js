import React from 'react'
import PropTypes from 'prop-types'
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'


const SDiv = styled.div`
  border: 0px solid;
  padding: 0px;
  margin: 12px 14px 12px 14px;
  font-weight: ${ ({typography}) => Dimensions.Fonts[typography].width };
  font-size: ${ ({typography}) => Dimensions.Fonts[typography].size };
  line-height: ${ ({typography}) => Dimensions.Fonts[typography].lineHeight };
  color: ${({color}) => Colors[color]};
  ${({fullWidth}) => fullWidth && `width: ${100}%`}
`

function TextLabel({
    value,
    typography,
    fullWidth,
    color,
    ...other
}) {

  return (
    <SDiv
      id={'text-label'}
      typography={typography}
      fullWidth={fullWidth}
      color={color}
      {...other}>
      {value}
    </SDiv>
  )
}

TextLabel.propTypes = {
    // Input value
    value: PropTypes.string,
    // Select one of (placeholder, body1, body2, subtitle2, subtitle1, title)
    typography : PropTypes.oneOf(Object.keys(Dimensions.Fonts)),
    // Define if input should take full width
    fullWidth: PropTypes.bool,
}

TextLabel.defaultProps = {
    value: 'Keep',
    typography: 'title1',
    fullWidth: true,
    color: 'secondary'
}

export default TextLabel
