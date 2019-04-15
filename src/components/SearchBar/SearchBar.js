import React, {useState, useEffect, useCallback} from "react";
import PropTypes from 'prop-types';
import Card from 'ui-core/Card'
import TextInput from 'ui-core/TextInput'
import IconButton from 'ui-core/IconButton'
import Icon from 'ui-core/Icon'
import {withRouter} from 'react-router'
import useLazySetter from 'hooks/useLazySetter'
import styled from 'styled-components'


const SCard = styled(Card)`
  padding: 2px 8px 2px 8px;
`

function SearchBar({
  filterToDo,
  history,
  ...other
}) {

  const [searchText, setSearch] = useState('')

  const onSearchChange = useCallback((e) => {
    setSearch(e.target.value)
  })
  const onClearSearch = useCallback(() => {
    history.push(`/home`)
    setSearch('')
  })

  const invokeSearch = () => setSearch(prevState => {
    filterToDo({pattern: prevState})
    return prevState
  })

  const lazySearchText = useLazySetter(searchText, 500)
  useEffect(() => {
    invokeSearch()
  }, [lazySearchText])

  const onKeyPressed = useCallback(
    (e) => {
      if(e.key === 'Enter') {
        invokeSearch()
      }
    },
    [filterToDo]
  )

  const onFocus = useCallback(() => {
    history.push('/search')
  })
  const onBlur = useCallback(() => {
    setSearch(prevState => {
      if(!prevState){
        history.push('/home')
      }
      return prevState
    })

  })

  return (
      <SCard
        id={'search-bar-root'}
        color={'secondary'}
        {...other}>
        <IconButton onClick={invokeSearch}>
          <Icon iconName={'search'} size={'sm'} color={'paleSky'}/>
        </IconButton>
        <TextInput
          value={searchText}
          placeholder={'Search'}
          typography={'body2'}
          onChange={onSearchChange}
          onKeyDown={onKeyPressed}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <IconButton onClick={onClearSearch}>
          <Icon iconName={'close'} size={'sm'} color={'paleSky'}/>
        </IconButton>
      </SCard>
  );
}

SearchBar.propTypes = {
  // Search ToDo
  filterToDo: PropTypes.func,
  // History object from react route
  history: PropTypes.object
}

SearchBar.defaultProps = {
  filterToDo: () => {console.log(`Search Pressed`)}
}

export default withRouter(SearchBar);
