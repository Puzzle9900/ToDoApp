import React from "react";
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar'
import Media from "react-media";
import Toolbar from 'ui-core/Toolbar'
import Icon from 'ui-core/Icon'
import TextLabel from 'ui-core/TextLabel'
import styled from 'styled-components'

const SContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 1fr;
  width: 100%;
`

const SSearchBar = styled(SearchBar)`
  grid-column: 2;

  @media (min-width: 750px) and (max-width: 1000px) {
    grid-column: 2 / 4;
  }

  @media (max-width: 750px) {
    grid-column: 1 / 4;
  }
`

const SLeftContainer = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  margin-left: 16px;

  @media (max-width: 750px) {
    display: none
  }

  #text-label {
    margin-left: 4px;
  }
`

function MainToolbar({
  filterToDo
}) {
  return (
      <Toolbar>
        <SContainer>
          <SLeftContainer>
            <Icon iconName={'playlist_add_check'} size={'lg'} color={'secondary'}/>
            <TextLabel value={'To-Do'} typography={'appTitle'}/>
          </SLeftContainer>
          <SSearchBar filterToDo={filterToDo}/>
        </SContainer>
      </Toolbar>
  );
}

MainToolbar.propTypes = {
  // Search ToDos
  filterToDo: PropTypes.func
}

MainToolbar.defaultProps = {
  filterToDo: () => {console.log(`Search ToDo Default Func`)}
}

export default MainToolbar;
