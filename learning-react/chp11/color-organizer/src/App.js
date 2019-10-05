import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SortMenu from'./components/sort-menu';
import AddColorFormContainer from './containers/add-color-form-container'
import ColorListContainer from './containers/color-list-container';
import ColorDetailContainer from './containers/color-details-container';

import './App.css';

const App = () => <Switch>
   <Route exact path="/:id" component={ColorDetailContainer} />
   <Route path="/" component={() => (
     <div className="App">
       <Route component={SortMenu} />
       <AddColorFormContainer />
       <Switch>
         <Route exact path="/" component={ColorListContainer} />
         <Route path="/sort/:sort" component={ColorListContainer} />
       </Switch>
     </div>
    )} />
</Switch>

export default App;
