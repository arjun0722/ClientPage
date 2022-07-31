import React, { useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalFooter,
  CButton,
  CModalTitle,
  CModalBody,
} from "@coreui/react";

function Modal(props) {
  let title = "";
  let modal_body = "";

  let pdf = "";
  if (props && props.data) {
    title = props.data.title;
    modal_body = props.data.modal_body;

    pdf = props.data.pdf;
  }

  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>view</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
        
          <a href={modal_body}>#press here for videos# --- </a>

          <a href={pdf}>hey pdf</a>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default Modal;
