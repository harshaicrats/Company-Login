import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { popup, deletename, companyname } from "../../features/loginSlice";
import Popup from "./Popup";
import "./companyData.css";
import { useHistory } from "react-router-dom";

export default function CompanyData() {
  const companyLists = useSelector((state) => state.register.companyDetails);

  const dispatch = useDispatch();

  const history = useHistory();
  const showPopup = (data) => {
    dispatch(
      popup({
        companyName: data,
      })
    );
  };
  const deleteData = (data) => {
    // console.log(data);
    dispatch(
      deletename({
        companyName: data,
      })
    );
  };
  const  companyId = (data) => {
    dispatch(
      companyname({
        companyName: data,
      })
    );
    history.push("/projects/"+data);
  };
 
  return (
    <React.Fragment>
      <Title>Company Name</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>

            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyLists?.map((e) => (
            <TableRow>
              <TableCell key={e}>{e.companyName}</TableCell>

              <TableCell align="right">
                <div className="button-group">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => showPopup(e.companyName)}
                    >
                      Contact
                    </button>
                    <button type="button" className="btn btn-secondary"
                     onClick={() => companyId(e.companyName)}>
                      Project
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteData(e.companyName)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <Popup />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
