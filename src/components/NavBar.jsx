import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FunctionsRoundedIcon from "@material-ui/icons/FunctionsRounded";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  headerHelpIcon: {
    marginLeft: "4px",
  },
  navLink: {
    textDecoration: "none",
    color: "inherit",
  },
  navLogo: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar color="primary" className={classes.toolBar}>
          <Link to="/" className={`${classes.navLink} ${classes.navLogo} `}>
            <Button color="inherit">
              <FunctionsRoundedIcon />
              <Typography variant="h6">GPA</Typography>
            </Button>
          </Link>
          <Link to="/cgpa" className={classes.navLink}>
            <Button color="inherit"> CGPA Calculator</Button>
          </Link>
          <Link to="/sgpa" className={classes.navLink}>
            <Button color="inherit" className={classes.menuButton}>
              SGPA Estimator
            </Button>
          </Link>
          {/* <Link className={classes.navLink}>
            <Button color='inherit' className={classes.menuButton}>
              Who are we
            </Button>
          </Link> */}
          <Link to="/support" className={classes.navLink}>
            <Button color="inherit" className={classes.menuButton}>
              Support
              <LiveHelpOutlinedIcon className={classes.headerHelpIcon} />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
