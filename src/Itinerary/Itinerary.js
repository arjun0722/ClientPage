import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Itinerary.css";
import pdf1 from "../assets/pdf/apdf.pdf";
import pdf2 from "../assets/pdf/bpdf.pdf";
import pdf3 from "../assets/pdf/cpdf.pdf";
import pdf4 from "../assets/pdf/dpdf.pdf";
import pdf5 from "../assets/pdf/epdf.pdf";
import pdf6 from "../assets/pdf/fpdf.pdf";
function Itinerary() {
  const modaldata = {
    modal_1: {
      title: "PDF1",
      // website: "https://www.amazon.in/",
      pdf: pdf1,
    },
    modal_2: {
      title: "PDF2",

      pdf: pdf2,
    },
    modal_3: {
      title: "PDF3",

      pdf: pdf3,
    },
    modal_4: {
      title: "PDF4",

      pdf: pdf4,
    },
    modal_5: {
      title: "PDF5",

      pdf: pdf5,
    },
    modal_6: {
      title: "PDF6",

      pdf: pdf6,
    },
  };
  return (
    <div className="container ">
      <h5>Itineraries & Invoices</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Format</th>
            <th scope="col">Itinerary</th>
            <th scope="col">Invoice</th>
            <th scope="col">Select any</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Format-1 offers you mentioning the headers bold</td>
            <td>
              <Modal data={modaldata.modal_1} />
            </td>
            <td>
              {" "}
              <Modal data={modaldata.modal_2} />
            </td>

            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1"></label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Format-2 offers you focuses on the clients details breifly</td>
            <td>
              <Modal data={modaldata.modal_3} />
            </td>
            <td>
              {" "}
              <Modal data={modaldata.modal_4} />
            </td>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1"></label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>

            <td>Coustom builder offer to build format coustmly</td>
            <td>
              {" "}
              <Modal data={modaldata.modal_5} />
            </td>
            <td>
              <Modal data={modaldata.modal_6} />
            </td>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1"></label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Itinerary;
