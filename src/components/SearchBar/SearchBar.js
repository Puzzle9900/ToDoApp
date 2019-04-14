import React, {useState, useCallback} from "react";
import PropTypes from 'prop-types';
import Card from 'ui-core/Card'
import TextInput from 'ui-core/TextInput'
import IconButton from 'ui-core/IconButton'
import Icon from 'ui-core/Icon'
import styled from 'styled-components'


const SCard = styled(Card)`
  padding: 0px 8px 0px 8px;
`

function SearchBar({
  searchToDo
}) {

  const [searchText, setSearch] = useState('')

  const onSearchChange = useCallback((e) => setSearch(e.target.value))
  const onClearSearch = useCallback(() => setSearch(''))

  const invokeSerarch = () => setSearch(prevState => {
    searchToDo(prevState)
    return prevState
  })

  const onKeyPressed = useCallback(
    (e) => { if(e.key === 'Enter') invokeSerarch() },
    [searchToDo]
  )

  return (
      <SCard
        color={'secondary'}>
        <IconButton onClick={invokeSerarch}>
          <Icon iconName={'search'} size={'sm'} color={'paleSky'}/>
        </IconButton>
        <TextInput
          value={searchText}
          placeholder={'Search'}
          typography={'body2'}
          onChange={onSearchChange}
          onKeyDown={onKeyPressed}
        />
        <IconButton onClick={onClearSearch}>
          <Icon iconName={'close'} size={'sm'} color={'paleSky'}/>
        </IconButton>
      </SCard>
  );
}

SearchBar.propTypes = {
  // Search ToDo
  searchToDo: PropTypes.func
}

SearchBar.defaultProps = {
  searchToDo: () => {console.log(`Search Pressed`)}
}

export default SearchBar;
