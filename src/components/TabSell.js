import React from 'react';
import { Segment } from 'semantic-ui-react';

import SaleTable from './TableSale';


const TabSell = () => {
  return (
    <>
    <Segment className="segment-header" color="blue"><h4>Select an Item from Your Holdings</h4></Segment>
    <SaleTable />
    </>
  )
}

export default TabSell;
