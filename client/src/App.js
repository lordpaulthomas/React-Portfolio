import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import './pages/About/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({location}) =>
            console.log(location) || (
               <TransitionGroup>
                <CSSTransition timeout={600} classNames={"move"} key={location.key}>
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/home" />}
                    />
                    <Route exact path="/home" component={Landing} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Home} />
                  </Switch>
                 </CSSTransition>
               </TransitionGroup>
            )
          }
        />
      </Router>
    );
  }
}

export default App;
