import React from "react";

import { Box, Button, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "rgb(1,22,123,0.5)",
    flexGrow: 1,
    justifyContent: "center",
    // alignItems: "flex-end",
    alignContent: "center",
    // height: "200px",
  },
  noOfSemesters: {
    display: "flex",
    // flexWrap: "wrap",
    // flexGrow: 1,
    justifyContent: "center",
    // backgroundColor: "rgb(1,22,23,0.5)",
  },
  buttonGenerate: {
    // alignSelf: "flex-end",
  },
}));

function Cgpa() {
  const classes = useStyles();
  return (
    <Box p={3}>
      <Container className={classes.root} minWidth='md'>
        <form
          className={classes.noOfSemesters}
          noValidate
          autoComplete='off'
          preventDefault
        >
          <TextField label='Number of Semesters' />
          <Button
            color='primary'
            size='large'
            className={classes.buttonGenerate}
            variant='outlined'
          >
            Generate Table
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Cgpa;
