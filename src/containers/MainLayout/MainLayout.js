import React from "react";
import PropTypes from 'prop-types';
import {Dimensions} from 'themes'
import MainToolbar from 'containers/MainToolbar'
import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SDetailsContainer = styled.div`
  width: 100%;
  padding-top: ${Dimensions.Toolbar.heigth + 2 * Dimensions.Toolbar.padding}px;
`

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }

  render() {
    const {
      children
    } = this.props

    return (
      <SContainer>
        <MainToolbar/>
        <SDetailsContainer>
          {children}
        </SDetailsContainer>

      </SContainer>
      )
  }
}

MainLayout.propTypes = {
    children: PropTypes.node,
}

MainLayout.defaultProps = {
}

export default MainLayout;
