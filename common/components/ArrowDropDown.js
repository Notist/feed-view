import React, { Component } from 'react';
import ArrowDropDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { white } from 'material-ui/styles/colors';
import config from '../../server/config';

function handleLogout() {
  window.location = `${config.apiHost}/logout`;
}

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    textColor: white,
  },
  userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || 'all',
});

export default class ArrowDropDown extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleProfileClick = () => {
    window.location = `${config.host}/profile/${this.props.userId}`;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <IconMenu
            menuStyle={{ backgroundColor: '#f2a051' }}
            iconButtonElement={<IconButton><ArrowDropDownIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Profile" onClick={this.handleProfileClick} />
            <MenuItem primaryText="Logout" onClick={handleLogout} />
          </IconMenu>
        </div>
      </MuiThemeProvider>
    );
  }
}

ArrowDropDown.defaultProps = {
  userId: '1',
};
