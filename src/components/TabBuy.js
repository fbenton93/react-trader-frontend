import React from 'react';
import { Segment } from 'semantic-ui-react';
import SelectionPane from './SelectionPane';
import PurchaseModal from './ModalPurchase';

const TabBuy = () => {
  return (
    <>
    <Segment className="segment-header" color="blue"><h4>Select an Asset Below for Analysis and Purchase Options</h4></Segment>
    <SelectionPane />
    <PurchaseModal />
    </>
  )
}

export default TabBuy;
