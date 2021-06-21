import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../features/loginSlice";
import Button from "@material-ui/core/Button";
import "./Popup.css";
Modal.setAppElement("#root");
function Popup() {
  const popupName = useSelector((state) => state.popup.modalName);
  const trigger = useSelector((state) => state.popup.setPopup);
  console.log(trigger);
  const companyLists = useSelector((state) => state.login.companyDetails);
  console.log(companyLists);
  const dispatch = useDispatch();
  const hidePopup = () => {
    dispatch(popup());
  };
  if (popupName) {
    const company = Object.values(popupName);
    var newArray = companyLists.filter((name) => name.companyName == company);
  }

  return (
    <div>
      <Modal
        isOpen={trigger}
        name={popupName}
        style={{
          overlay: {
            backgroundColor: "#EFF3FB",
          },
          content: {
            position: "absolute",
            top: "150px",
            left: "300px",
            right: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          },
        }}
      >
        <div className="input-section">
          {newArray?.map((e, index) => (
            <div key={e.index}>
              <div>
                Company Name:&ensp;<b>{e.companyName}</b>
              </div>
              <div>
                Contact Person:&ensp;<b>{e.personName}</b>
              </div>
              <div>
                Contact Person Ph:&ensp;<b>{e.personPhoneNumber}</b>
              </div>
              <div>
                Contact Person Email:&ensp;<b>{e.personEmailId}</b>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => hidePopup()}
          >
            close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;
