import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/screens/About';
import Home from './components/screens/Home';
import { StateContext } from './context/context';
import { useStateContext } from './context/context-hook';
const App = () => {
  const {
    carouselImages,
    aboutData,
    brandName,
    businessData,
    menuData,
  } = useStateContext();
  return (
    <StateContext.Provider
      value={{ carouselImages, aboutData, brandName, businessData, menuData }}
    >
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </Switch>
        </Layout>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
