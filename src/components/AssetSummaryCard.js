import React from 'react';
import { Card } from 'semantic-ui-react';


const AssetSummaryCard = ({ selectedAsset }) => {
  return (
    <Card id="summary-card">
      <div>
        <h3>{selectedAsset.companyName}</h3>
        <h4>CEO: {selectedAsset.CEO}</h4>
        <h5>Sector: {selectedAsset.sector}</h5>
        <p>{selectedAsset.description}</p>
        <p style={{color: 'gray'}}>(EXCHANGE: {selectedAsset.exchange})</p>
      </div>
    </Card>
  )
}

export default AssetSummaryCard
