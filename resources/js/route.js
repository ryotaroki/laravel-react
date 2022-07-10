import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Example from '/Users/kihararyoutarou/lesson/reactSample/sample/resources/js/components/pages/Example.js';

  function App() {
    return (
        <div>
            <Switch>
            <Route path='resources/js/components/pages/Example.js' exact component={Example} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
