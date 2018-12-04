import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import tickerSwitchboard from '../helpers/tickerSwitchboard';
import SearchBar from './SearchBar';

class SelectionTable extends Component {
  state = { searchTerm: '' }

  renderRows = () => {
    const { searchTerm } = this.state;
    const comparator = searchTerm.toLowerCase();
    return tickerSwitchboard(this.props.letter).map((listing) => {
      if(listing.symbol.toLowerCase().includes(comparator) || listing.name.toLowerCase().includes(comparator)) {
        return (
          <Table.Row key={listing.symbol} id={listing.symbol}>
            <Table.Cell id={listing.symbol}>{listing.symbol} - {listing.name}</Table.Cell>
          </Table.Row>
        )
      } else {
        return null;
      }
    })
  }

  setSearchTerm = (value) => {
    this.setState({ searchTerm: value })
  }

  handleClick = (event) => {
    console.log(event.target.id)
    this.props.openModal();
  }

  render() {
    return (
      <div id="selection-table">
        <SearchBar searchValue={this.state.searchTerm} setSearchTerm={this.setSearchTerm} />
        <Table compact={true} selectable={true} >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Selector: {this.props.letter}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body onClick={this.handleClick}>
            <div className="scrolling">
            {this.renderRows()}
            </div>
          </Table.Body>
        </Table>
      </div>

    )
  }
}

export default SelectionTable;
