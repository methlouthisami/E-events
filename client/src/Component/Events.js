
import React from "react";


import EV4 from "../images/evnet4.jpg";
import EV5 from "../images/evnet5.jpg";

import Fan from "../images/fan.jpeg";
import Cartage from "../images/cartage.jpg";
import Rbou5 from "../images/be-tounsi-couv.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEvents } from "../redux/actions/eventActions";


import "../Component/Events.css";

export default function Event() {




const dispatch = useDispatch();
const eventData = useSelector((state) => state.eventStore.event);

useEffect(() => {
  getAllEvents()
    .then(dispatch)
    .catch((e) => console.log("Error", e));
});
  return (
    <div className="header  ">
      <div className="row one">
        <h1 className="col-md-6 col-sm-6 ml-3">Catégorie</h1>
      </div>
      <div className="acceuil-cward">
        <div className="row">
          <div className="col-md-7 cward">
            <div class="card mb-3">
              <img src={Cartage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">slmmmmmmmmmmmm</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card  mb-4">
              <img src={Rbou5} class="card-img-top" alt="rbou5" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={Fan} class="card-img-top" alt="fan" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={EV4} class="card-img-top" alt="event5" />
              <div class="card-body">
                <h5 class="card-title">hhhhhhhhhhhh</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={EV4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={EV5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Ca tit</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card mb-4">
              <img src={EV5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 stick ml-5"
            style={{ borderLeft: "1px solid" }}
          >
            <div className="col-md-6 mt-3 buttons">
              <lu className="d-flex">
                <li>
                  <button className="col-md  myButton">Musical</button>
                </li>
                <li>
                  {" "}
                  <button className="col-md  myButton"> Social </button>
                </li>
                <li>
                  <button className="col-md  myButton">Culturel</button>
                </li>
                <li>
                  {" "}
                  <button className="col-md myButton">Primary</button>
                </li>
              </lu>
            </div>
            {eventData.map((el) => (
              <div
                className=" events-card "
                accordion-button
                style={{ borderLeft: " black" }}
              >
                <div class="card mb-3 " style={{ maxWidth: "300px" }}>
                  <div class="row no-gutters">
                    <div class="col-md-4  ">
                      <img
                        src={el.image}
                        className="card-img-event"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{el.title}</h5>
                        <p class="card-text">{el.description}</p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <hr />
            <footer className="mt-2">
              <ul className="footerLi">
                <li>
                  <h5>contact</h5>
                </li>
                <li>
                  <h5>contact</h5>
                </li>
                <li>
                  <h5>contact</h5>
                </li>
                <li>
                  <h5>contact</h5>
                </li>
                <li>
                  <h5>contact</h5>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
