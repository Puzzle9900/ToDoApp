import React from "react";
import PropTypes from 'prop-types';
import {Dimensions} from 'themes'
import MainToolbar from 'containers/MainToolbar'
import ToDoDetails from 'containers/ToDoDetails'
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
    return (
      <SContainer>
        <MainToolbar/>
        <SDetailsContainer>
          <ToDoDetails />
        </SDetailsContainer>

      </SContainer>
      )
  }
}

MainLayout.propTypes = {
    removeToDo: PropTypes.func,
}

MainLayout.defaultProps = {
}

export default MainLayout;
