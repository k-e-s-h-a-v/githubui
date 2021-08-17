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
  Tooltip
} from "@material-ui/core";

import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";



import FormatListNumberedOutlinedIcon from "@material-ui/icons/FormatListNumberedOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

import TemporaryDrawer from "./Cart-Items";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  root: {
    backgroundColor: "#000",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    backgroundColor: "#a7f7ff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function HeaderReturns() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <InputBase
          placeholder="Search Products"
          className={classes.searchInput}
          startAdornment={<SearchIcon fontSize="medium" />}
        />
      </Grid>
      <Grid item sm></Grid>
      <Grid item>
        <Tooltip title="Wishlist">
          <IconButton>
            <Badge badgeContent={wish.length} color="primary">
              <FormatListNumberedOutlinedIcon fontSize="medium" />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton onClick={toggleDrawer("right", true)}>
          <Badge badgeContent={cart.length} color="secondary">
            <Tooltip title="Cart">
              <ShoppingCartOutlinedIcon fontSize="medium" />
            </Tooltip>
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </Badge>
        </IconButton>

        <Tooltip title="Logout">
          <IconButton>
            <PowerSettingsNewIcon
              fontSize="medium"
            />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
