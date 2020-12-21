import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/screens/Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
