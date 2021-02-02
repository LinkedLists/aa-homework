import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
  constructor() {
    super();
    this.state = {searchTerm: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); //why again?

    let newState = this.state.searchTerm;
    //do i send to dispatch here or does event listener send the dispatch?
  }

  handleChange(e) {
    this.setState( { searchTerm: e.currentTarget.value} ) //currentTarget = input
  }

  render() {
    <form>
      <input onChange={this.handleChange} />
      <button type="submit" onClick={this.handleSubmit}>Search</button>
    </form>
  }
}

export default GiphysSearch;

