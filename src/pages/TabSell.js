import React from 'react';
import { connect } from 'react-redux';
import { modalOpen,  } from '../actions';

import { Segment } from 'semantic-ui-react';
import SaleTable from '../components/TableSale';
import TransactionModal from '../components/ModalTransaction';




const TabSell = () => {

    return (
      <>
      <Segment className="segment-header" color="blue"><h4>Select an Item from Your Holdings</h4></Segment>
      <SaleTable />
      <TransactionModal typeSell={true} />
      </>
    )
}






export default connect(null,{ modalOpen })(TabSell);
