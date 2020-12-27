import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/screens/About';
import GalleryScreen from './components/screens/Gallery';
import Home from './components/screens/Home';
import Menu from './components/screens/Menu';
import { StateContext } from './context/context';
import { useStateContext } from './context/context-hook';
const App = () => {
  const {
    carouselImages,
    aboutData,
    brandName,
    businessData,
    menuData,
    galleryImages,
  } = useStateContext();
  return (
    <StateContext.Provider
      value={{
        carouselImages,
        aboutData,
        brandName,
        businessData,
        menuData,
        galleryImages,
      }}
    >
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/menu' exact component={Menu} />
            <Route path='/gallery' exact component={GalleryScreen} />
          </Switch>
        </Layout>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
