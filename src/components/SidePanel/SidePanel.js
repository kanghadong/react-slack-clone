import React from 'react';
import {Menu} from 'semantic-ui-react';

import UserPanel from './UserPanel';
import Channels from './Channels';
import DirectMessages from './DirectMessages';
import Starred from './Starred';

class SidePanel extends React.Component {
  render() {
    const {currentUser, primaryColor, activeChannel} = this.props;

    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: primaryColor, fontSize: '1.2rem' }}
      >
        <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
        <Starred
          currentUser={currentUser}
          activeChannel={activeChannel}
        />
        <Channels
          currentUser={currentUser}
          activeChannel={activeChannel}
        />
        <DirectMessages
          currentUser={currentUser}
          activeChannel={activeChannel}
        />
      </Menu>
    );
  }
}

export default SidePanel;
