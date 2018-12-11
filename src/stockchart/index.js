// this file is a copy and paste from the documentation
import React from 'react';
import Chart from './Chart';
import iex from '../api/iex';
import chartConverter from '../helpers/chartConverter';


class ChartComponent extends React.Component {
  state = { data: [] }


	componentDidMount() {
    const { symbol } = this.props;
    iex.get(`/stock/${symbol}/chart/5y`)
    .then(response => {
      const parsedData = chartConverter(response.data)
      this.setState({ data: parsedData })
    })
	}

	render() {
    if(this.state.data.length === 0) {
      return <div>Loading...</div>
    } else {
      return (
        <div id="chart-container">
          <Chart data={this.state.data} />
        </div>
      )
    }

	}
}

export default ChartComponent;
