import React from "react";
import {
  Grid,
  Button,
  ButtonGroup,
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

import Box from "@material-ui/core/Box";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#010409",
  },
  grid: {
    // padding: "5px",
    padding: "3px 12px",
    color: "#fff",
  },
  button: {
    borderRadius: "4px",
    color: "#c9d1d9",
    backgroundColor: "#21262d",
    border: "1px solid",
    textTransform: "none",
    // padding: "3px 12px",
  },
  text: {
    color: "#ffffff",
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, email, phone, website, company) {
  return { name, email, phone, website, company };
}

const rows = [
  createData(
    "Leanne Graham",
    "Sincere@april.biz",
    "1-770-736-8031 x56442",
    "hildegard.org",
    "Romaguera-Crona"
  ),
  createData(
    "Leanne Graham",
    "Sincere@april.biz",
    "1-770-736-8031 x56442",
    "hildegard.org",
    "Romaguera-Crona"
  ),
  createData(
    "Leanne Graham",
    "Sincere@april.biz",
    "1-770-736-8031 x56442",
    "hildegard.org",
    "Romaguera-Crona"
  ),
  createData(
    "Leanne Graham",
    "Sincere@april.biz",
    "1-770-736-8031 x56442",
    "hildegard.org",
    "Romaguera-Crona"
  ),
];

export default function Users() {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" 
      // flexDirection="row"
      bgcolor="background.paper">
        <Box
          display="flex"
          flexDirection="row"
          p={1}
          m={1}
          bgcolor="background.paper"
          width="70%"
        >
          <Box p={1} bgcolor="grey.300">
            <Grid container alignItems="center" className={classes.root}>
              <Grid item className={classes.grid}>
                Heading of the table
              </Grid>
              <Grid item sm></Grid>
              <Grid item className={classes.grid}>
                <CheckIcon size="large" color="primary" />6 days ago
              </Grid>
            </Grid>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Website</TableCell>
                    <TableCell align="right">Company</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">{row.website}</TableCell>
                      <TableCell align="right">{row.company}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          p={1}
          m={1}
          bgcolor="background.paper"
          width="30%"
        >
          <Box p={1} bgcolor="grey.300">
            <Typography variant="h6">About</Typography>
          </Box>
          <Box p={1} bgcolor="grey.300">
            <Typography variant="h6">Releases</Typography>
          </Box>
          <Box p={1} bgcolor="grey.300">
            <Typography variant="h6">Sponsor this project</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
