import React, { useState } from "react";

import { Box, Button, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import lodash from "lodash";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },

  tableContainer: {
    borderRadius: 15,
  },
  tableHeaderCell: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    fontWeight: "bold",
  },
}));

function Cgpa() {
  const classes = useStyles();
  const [semCount, setSemCount] = useState("");
  const [semesters, setSemesters] = useState([
    { semesterNumber: 1, numberOfCredits: "", sgpa: "" },
  ]);

  const generateSemesters = () => {
    const newSemesters = [];
    for (let i = 1; i <= semCount; i++) {
      newSemesters.push({ semesterNumber: i, numberOfCredits: "", sgpa: "" });
    }
    setSemesters(newSemesters);
  };

  const handleDataChange = ({ target: { name, id, value } }) => {
    const currentSemester = id.split("-").pop();
    const clonedSemesters = lodash.cloneDeep(semesters);
    clonedSemesters[currentSemester - 1][name] = value;

    setSemesters(clonedSemesters);
  };

  return (
    <div>
      <Box p={3} display="flex" flexWrap="wrap" justifyContent="center">
        <Box m={1}>
          <TextField
            label="Number of Semesters"
            autoFocus
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={semCount}
            onChange={(e) => setSemCount(e.target.value)}
            InputProps={{ inputProps: { min: 1 } }}
          />
        </Box>
        <Box display="flex" alignItems="flex-end" m={1}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={generateSemesters}
          >
            Generate Table
          </Button>
        </Box>
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Semester
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Number Of Credits
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>SGPA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {semesters.map((semester) => (
                <TableRow key={semester.semesterNumber}>
                  <TableCell component="th" scope="row">
                    {semester.semesterNumber}
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      size="small"
                      type="number"
                      autoComplete="off"
                      name="numberOfCredits"
                      id={`numberOfCredits-${semester.semesterNumber}`}
                      value={semester.numberOfCredits}
                      onChange={handleDataChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      size="small"
                      type="number"
                      autoComplete="off"
                      name="sgpa"
                      id={`sgpa-${semester.semesterNumber}`}
                      value={semester.sgpa}
                      onChange={handleDataChange}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Cgpa;
