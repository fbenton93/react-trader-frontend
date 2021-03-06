import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import { connect } from 'react-redux';
import tickerSwitchboard from '../helpers/tickerSwitchboard';
import { fetchSelectedAsset } from '../actions';
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
    this.props.fetchSelectedAsset(event.target.id)
  }

  render() {
    return (
      <div id="selection-table">
        <Table compact={true} selectable={true} >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Selector: {this.props.letter}
                <SearchBar
                  searchValue={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body onClick={this.handleClick}>
              {this.renderRows()}
          </Table.Body>
        </Table>
      </div>

    )
  }
}


export default connect(null,{ fetchSelectedAsset })(SelectionTable);
