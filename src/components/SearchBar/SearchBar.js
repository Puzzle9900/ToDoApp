import React, {useState, useEffect, useCallback} from "react";
import PropTypes from 'prop-types';
import Card from 'ui-core/Card'
import TextInput from 'ui-core/TextInput'
import IconButton from 'ui-core/IconButton'
import Icon from 'ui-core/Icon'
import useLazySetter from 'hooks'
import styled from 'styled-components'


const SCard = styled(Card)`
  padding: 2px 8px 2px 8px;
`

function SearchBar({
  filterToDo,
  ...other
}) {

  const [searchText, setSearch] = useState('')

  const onSearchChange = useCallback((e) => setSearch(e.target.value))
  const onClearSearch = useCallback(() => setSearch(''))

  const invokeSerarch = () => setSearch(prevState => {
    filterToDo({ pattern: prevState})
    return prevState
  })

  const lazySearchText = useLazySetter(searchText, 500)

  useEffect(() => {
    filterToDo({ pattern: lazySearchText})
  }, [lazySearchText])

  const onKeyPressed = useCallback(
    (e) => {
      if(e.key === 'Enter') {
        invokeSerarch()
      }
      else {

      }
    },
    [filterToDo]
  )

  return (
      <SCard
        id={'search-bar-root'}
        color={'secondary'}
        {...other}>
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
  filterToDo: PropTypes.func
}

SearchBar.defaultProps = {
  filterToDo: () => {console.log(`Search Pressed`)}
}

export default SearchBar;
