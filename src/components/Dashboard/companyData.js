import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../features/loginSlice";
import Popup from "./Popup";
import './companyData.css'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const showPop = useSelector((state) => state.popup.setPopup);

  const companyLists = useSelector((state) => state.login.companyDetails);
  const dispatch = useDispatch();
  const showPopup = (data) => {
    dispatch(
      popup({
        companyName: data,
      })
    );
  };

  return (
    <React.Fragment>
      <Title>Company Name</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>

            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyLists.map((e, index) => (
            <TableRow>
              <TableCell key={e.index}>{e.companyName}</TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  className="button"
                  onClick={() => showPopup(e.companyName)}
                >
                  View
                </Button>
                <Popup />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
