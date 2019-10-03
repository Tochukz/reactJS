import React from 'react';
import PropTypes from 'prop-types';

import AddColorForm from './components/add-color-form';
import ColorList from './components/color-list';
import SortMenu from './components/sort-menu';
import { sortFunction } from './lib/array-helpers';

import './App.css';

class App extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    // We subscribe to the store and our listener updates the component tree everytime our store updates its state
    // this.forceUpdate() will trigger the updating lifecycle which will rerender our UI
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    // We can stop listening on the store now.
    this.unsubscribe();
  }

  render() {
    const { colors, sort } = this.props.store.getState();
    const sortedColors = [...colors].sort(sortFunction(sort));
    return (
      <div className="App">
        <SortMenu />
        <AddColorForm />
        <ColorList colors={sortedColors} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

App.childContextTypes = {    
  store: PropTypes.object.isRequired 
}

export default App;
