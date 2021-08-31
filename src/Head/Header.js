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
// import clsx from "clsx";
import GitHubIcon from "@material-ui/icons/GitHub";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#161b22", //"rgb(121, 184, 255)",  #272727
    display: "flex",
    color: "white",
    // padding: "12px"
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

const options = ["Add from your device", "Add from cloud"];

function Header() {
  const classes = useStyles();

  //used for dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  //upper portion used for dropdown

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
                fontSize="small"
                className={classes.icon}
              />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton>
          <ButtonGroup ref={anchorRef}>
            {/* <Button onClick={handleClick}>
              
            </Button> */}
            <Button size="small" onClick={handleToggle}>
              <AddOutlinedIcon className={classes.icon} />
              <ArrowDropDownIcon className={classes.icon} />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {() => (
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            )}
          </Popper>
        </IconButton>

        <Tooltip title="User">
          <IconButton>
          <Badge color="secondary" badgeContent=" " variant="dot">
            <AccountCircleOutlinedIcon
              fontSize="small"
              className={classes.icon}
            />
            </Badge>
            <ArrowDropDownIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
export default Header;
