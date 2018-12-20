import React from 'react';
import { Segment } from 'semantic-ui-react';
import SelectionPane from '../components/SelectionPane';
import TransactionModal from '../components/ModalTransaction';

const TabBuy = () => {
  return (
    <>
    <Segment className="segment-header" color="blue">
      <h4>Assets must be searched by alphabet. Narrow your search using the searchbar.</h4>
    </Segment>
    <SelectionPane />
    <TransactionModal typeSell={false} />
    </>
  )
}

export default TabBuy;
