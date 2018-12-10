import React, { Component } from 'react';
import alphabet from '../helpers/alphabet.js';
import SelectionTable from './TableSelection';

class SelectionPane extends Component {
  state = {
    letterFilter: 'A',
    searchFilter: ''
  }

  renderFilter = () => {
    const filters = alphabet.map((letter) => {
      return (<li id={letter} key={letter}>{letter}</li>)
    })
    return filters;
  }

  filterAlpha = (event) => {
    this.setState({ letterFilter: event.target.id})
  }

  render() {
    return (
      <div className="flex-container">
        <ul id="alpha-filter" onClick={this.filterAlpha}>
          {this.renderFilter()}
        </ul>
        <SelectionTable letter={this.state.letterFilter} />
      </div>
    )

  }
}

export default SelectionPane;
