import React, { Component } from 'react';
import { Input, Card } from 'semantic-ui-react';

class TransactionCard extends Component {
  state = { units: 0 }

  handleChange = (event) => {
    this.setState({ units: event.target.value })
  }

  render() {
    return (
      <Card id="transaction-card">
        <div>
          <form>
            <label>Units</label>
            <Input type="number" value={this.state.units} onChange={this.handleChange} />
          </form>
        </div>
      </Card>
    )
  }
}

export default TransactionCard;
