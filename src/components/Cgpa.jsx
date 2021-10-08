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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function Cgpa() {
  const classes = useStyles();
  const [semCount, setSemCount] = useState("");

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
          />
        </Box>
        <Box display="flex" alignItems="flex-end" m={1}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={() => setSemCount()}
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
              {rows.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" type="number" />
                  </TableCell>
                  <TableCell>
                    <TextField variant="outlined" size="small" type="number" />
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
