import React from 'react';
import { Segment } from 'semantic-ui-react';
import SelectionPane from '../components/SelectionPane';
import TransactionModal from '../components/ModalTransaction';

const TabBuy = () => {
  return (
    <>
    <Segment className="segment-header" color="blue">
      <h4>Assets Must Be Searched by Alphabet. Narrow Your Search Using The Searchbar.</h4>
    </Segment>
    <SelectionPane />
    <TransactionModal typeSell={false} />
    </>
  )
}

export default TabBuy;
