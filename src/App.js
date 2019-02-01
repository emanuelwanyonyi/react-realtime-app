import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import PlaceOrder from './components/PlaceOrder';
import Kitchen from './components/Kitchen';
import UpdatePredicted from './components/UpdatePredicted';
import { from } from 'rxjs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path="/" component={PlaceOrder}/>
              <Route path="/updatepredicted" component={UpdatePredicted}/>
              <Route path="/Kitchen" component={Kitchen}/>
          </Switch>
      </div>
    );
  }
}

export default App;
