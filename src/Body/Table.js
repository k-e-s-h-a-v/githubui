import React, { useState, useEffect } from "react";
import {
    Grid,
    makeStyles,
    Typography,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Button,
    ButtonGroup,
    InputBase,
    IconButton,
    Badge,
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

import userData from "./userData";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
    },
    grid: {
        // padding: "5px",
        padding: "3px 8px",
        color: "#c9d1d9",
        // alignItems: "center",
    },
    button: {
        borderRadius: "6px",
        color: "#c9d1d9",
        backgroundColor: "#21262d",
        border: "1px solid #30363d",
        textTransform: "none",
        marginLeft: "6px",
        padding: "3px 10px",
        "&:hover": {
            borderColor: "#FFF",
            color: "#c9d1d9",
            backgroundColor: "#21262d",
        },
    },
    text: {
        color: "#c9d1d9",
        fontSize: "14px",
    },
    table: {
        minWidth: "auto",
    },
    icon: {
        marginRight: "6px",
        width: 16,
        height: 16,
        fill: "#8b949e",
    },
}));

export default function TablePart() {
    const classes = useStyles();
    const loadStyle = {
        height: "calc(100vh - 155px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        // setIsLoaded(true);
        // setUsers(userData);
        return (
            <div className={classes.text} style={loadStyle}>
                Error: {error.message}
            </div>
        );
    } else if (!isLoaded) {
        return (
            <div className={classes.text} style={loadStyle}>
                Loading...
            </div>
        );
    } else {
        return (
            <div style={{ height: "calc(100vh - 155px)" }}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                    <Box
                        display="flex"
                        flexDirection="column"
                        p={1}
                        m={1}
                        width="auto"
                    >
                        <Grid
                            container
                            alignItems="center"
                            className={classes.root}
                        >
                            <Grid item className={classes.grid}>
                                <Button
                                    className={classes.button}
                                    style={{ marginLeft: "0px" }}
                                >
                                    <svg
                                        height="16"
                                        viewBox="0 0 16 16"
                                        width="16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            fill="#8b949e"
                                            d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                                        ></path>
                                    </svg>
                                    <Typography
                                        className={classes.text}
                                        style={{ marginLeft: "6px" }}
                                    >
                                        master
                                    </Typography>
                                    <ArrowDropDownIcon
                                        className={classes.icon}
                                    />
                                </Button>
                            </Grid>
                            <Grid item sm></Grid>
                            <Grid item className={classes.grid}>
                                <Button className={classes.button}>
                                    <Typography className={classes.text}>
                                        Go to file
                                    </Typography>
                                </Button>
                                <Button className={classes.button}>
                                    <Typography className={classes.text}>
                                        Add file
                                    </Typography>
                                    <ArrowDropDownIcon
                                        className={classes.icon}
                                    />
                                </Button>
                                <Button
                                    className={classes.button}
                                    style={{ backgroundColor: "green" }}
                                >
                                    <Typography className={classes.text}>
                                        Code
                                    </Typography>
                                    <ArrowDropDownIcon
                                        className={classes.icon}
                                    />
                                </Button>
                            </Grid>
                        </Grid>

                        <Box p={1}>
                            <Box
                                border={1}
                                borderRadius={10}
                                borderColor="#c9d1d9"
                            >
                                {/* border radius should be 6 */}
                                <Grid
                                    container
                                    // className={classes.root}
                                >
                                    <Grid item className={classes.grid}>
                                        Heading of the table
                                    </Grid>
                                    <Grid item sm></Grid>
                                    <Grid item className={classes.grid}>
                                        <CheckIcon
                                            fontSize="small"
                                            style={{
                                                fill: "green",
                                                marginBottom: "-4px",
                                            }}
                                        />
                                        6 days ago
                                    </Grid>
                                </Grid>
                                <Divider
                                    style={{ backgroundColor: "#c9d1d9" }}
                                />

                                {/* <TableContainer component={Paper}> */}
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                        <TableCell>
                                            <span style={{ color: "#c9d1d9" }}>
                                                Icon
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ color: "#c9d1d9" }}>
                                                Name
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ color: "#c9d1d9" }}>
                                                Email
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ color: "#c9d1d9" }}>
                                                Phone
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ color: "#c9d1d9" }}>
                                                Website
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ color: "#c9d1d9" }}>
                                                Compan
                                            </span>
                                            y
                                        </TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell>
                                                    <AccountCircleIcon
                                                        style={{
                                                            fill: "#c9d1d9",
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <span
                                                        style={{
                                                            color: "#c9d1d9",
                                                        }}
                                                    >
                                                        {user.name}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <span
                                                        style={{
                                                            color: "#c9d1d9",
                                                        }}
                                                    >
                                                        {user.email}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <span
                                                        style={{
                                                            color: "#c9d1d9",
                                                        }}
                                                    >
                                                        {user.phone}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <span
                                                        style={{
                                                            color: "#c9d1d9",
                                                        }}
                                                    >
                                                        {user.website}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <span
                                                        style={{
                                                            color: "#c9d1d9",
                                                        }}
                                                    >
                                                        {user.company.name}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                {/* </TableContainer> */}
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        p={1}
                        m={1}
                        color="#c9d1d9"
                        width="20%"
                    >
                        <Box p={1}>
                            <Typography variant="h6">About</Typography>
                            Something
                        </Box>
                        <Divider style={{ backgroundColor: "#c9d1d9" }} />
                        <Box p={1}>
                            <Typography variant="h6">Releases</Typography>
                            latest relese will be placed here
                        </Box>
                        <Divider style={{ backgroundColor: "#c9d1d9" }} />
                        <Box p={1}>
                            <Typography variant="h6">
                                Sponsor this project
                            </Typography>
                            list of sponsers here
                        </Box>
                        <Divider style={{ backgroundColor: "#c9d1d9" }} />
                    </Box>
                </Box>
            </div>
        );
    }
}
