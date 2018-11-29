import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const LoadingPage = ({ msg }) => {
  return (
    <Dimmer active>
      <Loader content={msg} />
    </Dimmer>
  )
}

export default LoadingPage
