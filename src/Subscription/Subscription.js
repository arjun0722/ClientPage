import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Subscription.css";
function Subscription() {
  const modaldata = {
    modal_1: {
      title: "Youtube Video 1",

      modal_body: "https://www.youtube.com/watch?v=0nu6pescBgg",
    },
    modal_2: {
      title: "Youtube Vedio 2",

      modal_body: "https://www.youtube.com/watch?v=GvvFZv6Z4B0",
    },
    modal_3: {
      title: "Youtube Vedio 3",

      modal_body: "https://www.youtube.com/watch?v=8uYbiu-ZN5s",
    },
  };

  return (
    <div className="container">
      <h5>Subscription</h5>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Transactions</th>
            <th scope="col">Payment</th>
            <th scope="col">Validity</th>
            <th scope="col">Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">21/07/2022</th>

            <td>
              Google LLC (/ˈɡuːɡəl/ (listen)) is an American multinational
              technology company that focuses on search engine technology,
              online advertising, cloud computing, computer software, quantum
              computing, e-commerce, artificial intelligence,
            </td>
            <td>200$</td>
            <td>1 year</td>
            <td>
              <div>
                <Modal data={modaldata.modal_1} />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">22/07/2022</th>
            <td>
              Google LLC (/ˈɡuːɡəl/ (listen)) is an American multinational
              technology company that focuses on search engine technology,
              online advertising, cloud computing, computer software, quantum
              computing, e-commerce, artificial intelligence,
            </td>
            <td>300$</td>
            <td>2 years</td>
            <td>
              <Modal data={modaldata.modal_2} />
            </td>
          </tr>
          <tr>
            <th scope="row">23/07/2022</th>
            <td>
              Google LLC (/ˈɡuːɡəl/ (listen)) is an American multinational
              technology company that focuses on search engine technology,
              online advertising, cloud computing, computer software, quantum
              computing, e-commerce, artificial intelligence,
            </td>
            <td>400$</td>
            <td>3 years</td>
            <td>
              <Modal data={modaldata.modal_3} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Subscription;
