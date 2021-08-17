import React from "react";
import {
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import clsx from "clsx";
import GitHubIcon from "@material-ui/icons/GitHub";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#272727",
    display: "flex",
    color: "white",
  },
  searchInput: {
    opacity: "0.6",
    color: "white",
    borderColor: "white",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
  icon: {
    color: "white",
  },
  list: {
    listStyle: "none",
  },
  grid: {
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  button: {
    borderRadius: "4px",
    color: "#fff",
    backgroundColor: "#000",
    color: "white",
    border: "1px solid white",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item>
        <IconButton>
          <GitHubIcon fontSize="medium" className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid item className={classes.grid}>
        <InputBase
          placeholder="Search or jump to..."
          className={classes.searchInput}
          endAdornment={<button className={classes.button}>/</button>}
          style={{ borderRadius: "4px" }}
        />
        <ul className={classes.list}>
          <li style={{ display: "inline", padding: "0px 10px" }}>
            Pull requests
          </li>
          <li style={{ display: "inline", padding: "0px 10px" }}>Issues</li>
          <li style={{ display: "inline", padding: "0px 10px" }}>
            Marketplace
          </li>
          <li style={{ display: "inline", padding: "0px 10px" }}>Explore</li>
        </ul>
      </Grid>

      <Grid item sm></Grid>
      <Grid item>
        <Tooltip title="Notification">
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneOutlinedIcon
                fontSize="medium"
                className={classes.icon}
              />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton>
          <Badge badgeContent={5} color="secondary">
            <Tooltip title="add from ...">
              <AddOutlinedIcon fontSize="medium" className={classes.icon} />
            </Tooltip>
          </Badge>
        </IconButton>

        <Tooltip title="User">
          <IconButton>
            <AccountCircleOutlinedIcon
              fontSize="medium"
              className={classes.icon}
            />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default Header;
