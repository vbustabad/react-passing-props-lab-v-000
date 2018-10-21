import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null, 
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({filters}));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({fruit}));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({currentFilter: event.target.value});
  }

  render() {
    return (
      <FruitBasket 
        handleChange={this.handleFilterChange} 
        filter={this.state.currentFilter} 
        filters={this.state.filters}
        fruit={this.state.fruit}
      />
    )
  }
}

export default App;
