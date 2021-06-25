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
  const companyLists = useSelector((state) => state.register.companyDetails);
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
            backgroundColor: "#ffffff",
          },
          content: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#f7f9fc",
            boxShadow: "5px 5px 4px  6px #c8e1ff",
            alignItems: "center",
            height: "60%",
            width: "50%",
          },
        }}
      >
        <div className="input-section">
          {newArray?.map((e) => (
            <div key={e}>
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
