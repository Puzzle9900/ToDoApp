import React, {useState, useCallback} from "react";
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar'
import Toolbar from 'ui-core/Toolbar'
import TextInput from 'ui-core/TextInput'
import IconButton from 'ui-core/IconButton'
import Icon from 'ui-core/Icon'
import TextLabel from 'ui-core/TextLabel'
// import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'

const SContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 1fr;
  width: 100%;
`

const SSearchBar = styled(SearchBar)`
  grid-column: 2;
`

const SLeftContainer = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  margin-left: 16px;

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
            {/* <IconButton onClick={() => {console.log(`Drawer open/close`)}}>
              <Icon iconName={'dehaze'} size={'sm'} color={'secondary'}/>
            </IconButton> */}
            <Icon iconName={'playlist_add_check'} size={'sm'} color={'secondary'}/>
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
