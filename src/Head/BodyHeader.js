import React from "react";
// import Users from "../Body/Users"

import {
  Grid,
  Button,
  ButtonGroup,
  makeStyles,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#0d1117",
  },
  grid: {
    padding: "2px 9px",
    // color: "#fff",
    alignItems: "center",
    justifyItems: "center",
  },
  button: {
    borderRadius: "6px",
    backgroundColor: "#21262d",
    border: "1px solid #30363d",
    textTransform: "none",
    marginRight: "6px",
    "&:hover": {
      borderColor: "#FFF",
      color: "#c9d1d9",
      backgroundColor: "#21262d",
      border: "1px solid",
    },
  },
  text: {
    color: "#c9d1d9",
    fontSize: "12px",
  },
  table: {
    minWidth: 650,
  },
  icon: {
    marginRight: "6px",
    width: 16,
    height: 16,
    fill: "#8b949e",
  },
}));

export default function BodyHeader() {
  const classes = useStyles();
  const linkStyle = {
    color: "#58a6ff",
    fontSize: "20px",
    textDecoration: "none",
  };
  const btn = {
    padding: "2px 10px",
  };
  const sponserBtn = {
    padding: "3.34px 12px",
  };

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item className={classes.grid}>
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          style={{ margin: "0px 8px", marginBottom: "-4px" }}
        >
          <path
            fill-rule="evenodd"
            fill="#8b949e"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        <a href="#" style={linkStyle}>
          repository
        </a>
        <span style={{ margin: "0px 4px", color: "#c9d1d9", }}>/</span>
        <a href="#" style={linkStyle}>
          folder
        </a>
      </Grid>
      <Grid item sm></Grid>
      <Grid item className={classes.grid} style={{ padding: "10px 0px" }}>
        <ButtonGroup className={classes.button}>
          <Button style={sponserBtn}>
            <FavoriteBorderOutlinedIcon
              className={classes.icon}
              style={{ fill: "red" }}
            />
            <Typography className={classes.text}>Sponsor</Typography>
          </Button>
          {/* <Button className={classes.text} size="small" style={btn}>
            123
          </Button>  */}
        </ButtonGroup>

        <ButtonGroup className={classes.button}>
          <Button style={btn}>
            <VisibilityOutlinedIcon className={classes.icon} />
            <Typography className={classes.text}>Watch</Typography>
            <ArrowDropDownIcon
              className={classes.icon}
              style={{ marginRight: 0 }}
            />
          </Button>
          <Button className={classes.text} size="small" style={btn}>
            123
          </Button>
        </ButtonGroup>

        <ButtonGroup className={classes.button} style={{ marginTop: "-200px" }}>
          <Button style={btn}>
            <StarBorderOutlinedIcon
              className={classes.icon}
              style={{ marginTop: "-2px" }}
            />
            <Typography className={classes.text}>Star</Typography>
          </Button>
          <Button size="small" className={classes.text} style={btn}>
            9.6k
          </Button>
        </ButtonGroup>

        <ButtonGroup className={classes.button}>
          <Button style={btn}>
            <svg
              height="auto"
              width="16"
              viewBox="0 0 16 16"
              className={classes.icon}
            >
              <path
                fill-rule="evenodd"
                fill="#8b949e"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
            <Typography className={classes.text}>Fork</Typography>
          </Button>
          <Button size="small" className={classes.text} style={btn}>
            703
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
