import React from "react";
import BodyHeader from "../Head/BodyHeader";
import Table from "./Table";
import SwipeableViews from "react-swipeable-views";
import CodeIcon from "@material-ui/icons/Code";
import AdjustIcon from "@material-ui/icons/Adjust";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import TrendingUpSharpIcon from "@material-ui/icons/TrendingUpSharp";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import {
    Grid,
    Button,
    ButtonGroup,
    makeStyles,
    Typography,
    useTheme,
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

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{ padding: 0 }} p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const textNicon = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#0d1117",
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
    appbar: {
        color: "#ffffff",
        backgroundColor: "#0d1117",
        textTransform: "none",
    },
    tab: {
        textTransform: "none",
        padding: "100",
        // marginRight: "100",
        minWidth: 10,
        // width: "auto",
    },
    badge: {
        borderRadius: "2em",
        color: "#8b949e",
        backgroundColor: "#8b949e33",
        textTransform: "none",
        padding: "0px 6px",
        marginLeft: "3px",
    },
}));

export default function Body() {
    const theme = useTheme();
    const tabStyle = {
        height: "calc(100vh - 155px)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const classes = useStyles();

    const showK = (num) => {
        return Math.abs(num) > 999
            ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
            : Math.sign(num) * Math.abs(num);
    };

    return (
        <div>
            <BodyHeader />
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        style={{ marginLeft: "12px" }}
                    >
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <CodeIcon
                                        fontSize="small"
                                        style={{ marginRight: "6px" }}
                                    />
                                    Code
                                </span>
                            }
                            {...a11yProps(0)}
                        />
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <AdjustIcon
                                        fontSize="small"
                                        style={{ marginRight: "6px" }}
                                    />
                                    {/* <Badge
                    badgeContent={3514}
                    color="primary"
                    // anchorOrigin={{ horizontal: "right", vertical: "middle" }}
                  >
                  </Badge> */}
                                    Issues
                                    <Box className={classes.badge}>
                                        {showK(3154)}
                                    </Box>
                                </span>
                            }
                            {...a11yProps(1)}
                        />
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <svg
                                        height="20"
                                        width="20"
                                        style={{
                                            marginBottom: "-4px",
                                            marginRight: "6px",
                                        }}
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            fill="#fff"
                                            d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                                        ></path>
                                    </svg>
                                    Pull requests
                                </span>
                            }
                            {...a11yProps(2)}
                        />
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <PlayCircleOutlineOutlinedIcon
                                        fontSize="small"
                                        style={{ marginRight: "6px" }}
                                    />
                                    Actions
                                </span>
                            }
                            {...a11yProps(3)}
                        />
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <AssessmentOutlinedIcon
                                        fontSize="small"
                                        style={{
                                            marginRight: "6px",
                                            transform: "rotate(180deg)",
                                        }}
                                    />
                                    Projects
                                    <Box className={classes.badge}>
                                        {showK(34)}
                                    </Box>
                                </span>
                            }
                            {...a11yProps(4)}
                        />
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <VerifiedUserOutlinedIcon
                                        fontSize="small"
                                        style={{ marginRight: "6px" }}
                                    />
                                    Security
                                    <Box className={classes.badge}>
                                        {showK(14)}
                                    </Box>
                                </span>
                            }
                            {...a11yProps(5)}
                        />
                        <Tab
                            className={classes.tab}
                            label={
                                <span style={textNicon}>
                                    <TrendingUpSharpIcon
                                        fontSize="small"
                                        style={{ marginRight: "6px" }}
                                    />
                                    Insights
                                </span>
                            }
                            {...a11yProps(6)}
                        />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    style={{ height: "100%" }}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Table />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <span style={tabStyle}>
                            {" "}
                            Issues List here (coming soon...){" "}
                        </span>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <span style={tabStyle}>
                            {" "}
                            PR list here (coming soon...){" "}
                        </span>
                    </TabPanel>
                </SwipeableViews>
            </div>
        </div>
    );
}
