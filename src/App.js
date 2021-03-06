import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/screens/About';
import BlogPosts from './components/screens/BlogPosts';
import GalleryScreen from './components/screens/Gallery';
import Home from './components/screens/Home';
import Menu from './components/screens/Menu';
import SingleBlogPost from './components/screens/SingleBlogPost';
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
    blogPosts,
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
        blogPosts,
      }}
    >
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/menu' exact component={Menu} />
            <Route path='/gallery' exact component={GalleryScreen} />
            <Route path='/blog' exact component={BlogPosts} />
            <Route path='/blog/:id' exact component={SingleBlogPost} />
          </Switch>
        </Layout>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
