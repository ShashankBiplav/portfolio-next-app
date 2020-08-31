import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';


function App() {
  return (
    <div className="App">
        <NavigationItems />
        <Switch>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/skills" exact component={Skills}/>
          <Route path="/testimonials" exact component={Testimonials}/>
          <Route path="/" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
