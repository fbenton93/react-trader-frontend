import React from 'react';
import { Table } from 'semantic-ui-react';

import differenceAsAPercent from '../helpers/differenceAsAPercent';

const AssetsTableRow = ({ asset }) => {
  return (
    <Table.Row>
      <Table.Cell>{asset.ticker}</Table.Cell>
      <Table.Cell>{asset.name}</Table.Cell>
      <Table.Cell>{asset.quantity}</Table.Cell>
      <Table.Cell>${asset.totalSpent}</Table.Cell>
      <Table.Cell>$47,000</Table.Cell>
      <Table.Cell>-0.97%</Table.Cell>
    </Table.Row>
  )
}

export default AssetsTableRow;
