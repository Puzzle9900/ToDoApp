import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import MainLayout from 'containers/MainLayout'
import ToDoDetails from 'containers/ToDoDetails'
import ToDoList from 'containers/ToDoList'
import styled from 'styled-components'


const SToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`

function ToDoListRoute(){
  return (
    <SToDoListContainer >
      <ToDoList/>
    </SToDoListContainer>
  )
}


function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path={'/home'} exact  component={ToDoDetails} />
          <Route path={'/search'} component={ToDoListRoute} />
          <Redirect to={'/home'} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
