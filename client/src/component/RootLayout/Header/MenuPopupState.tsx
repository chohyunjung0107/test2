import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MenuPopupState() {
  const navigate = useNavigate();

  const handleSetting = () => {
    alert('개인설정');
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton
            color="inherit"
            aria-label="theme mode"
            // onClick={MenuPopupState}
            edge="start"
            {...bindTrigger(popupState)}
          >
            <AccountCircleIcon />
          </IconButton>

          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                navigate('/login');
              }}
            >
              로그아웃
            </MenuItem>
            <MenuItem
              onClick={async () => {
                await handleSetting();
                popupState.close();
              }}
            >
              개인설정
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
