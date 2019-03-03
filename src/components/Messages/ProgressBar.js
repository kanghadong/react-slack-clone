import React from 'react';
import {Progress} from 'semantic-ui-react';

const ProgressBar = ({uploadState, percentUploaded}) => (
  uploadState !== 'done' && (
    <Progress
      className="progress__bar"
      style={{
        width: '75%',
        position: 'fixed',
        zIndex: '1',
        top: '15vh',
        left: '260px',
      }}
      percent={percentUploaded}
      progress
      indicating
      size="medium"
      inverted
    />
  )
);

export default ProgressBar;
