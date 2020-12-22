import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/screens/Home';
import { StateContext } from './context/context';
import { useStateContext } from './context/context-hook';
const App = () => {
  const { carouselImages } = useStateContext();
  return (
    <StateContext.Provider value={{ carouselImages }}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Layout>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
