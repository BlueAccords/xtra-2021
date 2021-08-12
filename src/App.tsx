import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';
import { AboutPage } from './app/containers/AboutPage';
import { Navbar } from './app/components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `
  }
`;

function App() {
  return (
   <AppContainer>
     
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route />
          
        </Switch>
      </Router>
   </AppContainer>
  );
}

export default App;
