import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useStyles } from "./style.js";

UserInfo.propTypes = {};

function UserInfo(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.headerUser}>
        <Avatar
          className={classes.userAvatar}
          onClick={handleClick}
          alt="To Le Hoai"
          src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/30725748_894736990691384_2491965833597681664_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=UWSAbDB9EdgAX-9K8b_&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT8drSPfIpJQFqofUKetb540oi711Iq2FJ3p278XbCTRQA&oe=61FE47F2"
        />
        <div className={classes.userInfo}>
          <div className={classes.userName}>Tô Lê Hoài</div>
          <div className={classes.major}>
            Mạng máy tính và truyền thông dữ liệu
          </div>
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 220,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Tài khoản
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Thêm một tài khoản mới
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Cài đặt
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserInfo;
