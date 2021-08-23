import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favori from "./Component/favorit";
import Contact from "./Component/Contact";
import Events from "./Component/Events";
import Home from "./Component/Acceuil";
import AboutUs from "./Component/AboutUs";

import { Navbar, Container, Nav } from "react-bootstrap";
import ADmin from "./Component/Admin";
import Footer from "./Component/Footer";

export default function App() {
    return (
        <div>
            <Router>
                <nav>
                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        bg="dark"
                        variant="dark"
                        className="fixed-top navv "
                    >
                        <Container>
                            <Navbar.Brand href="#home">
                                <Link to="/Acceuil">
                                    <h4>E-events</h4>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="">
                                        <Link to="/Acceuil">
                                            <h5>Acceuil</h5>
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link href="/Events">
                                        <Link to="/Events">
                                            <h5>Events</h5>
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link href="/AboutUs">
                                        <Link to="/AboutUs">
                                            <h5>AboutUs</h5>
                                        </Link>
                                    </Nav.Link>
                                </Nav>

                                <Nav.Link href="/Contact">
                                    <Link to="/Contact">
                                        <h5>Contact</h5>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="/favorit">
                                    <Link to="/favorit">
                                        <h5>Favorits</h5>
                                    </Link>
                                </Nav.Link>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </nav>

                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Acceuil" exact component={Home} />
                        <Route path="/admin" component={ADmin} />

                        <Route path="/Contact" component={Contact} />
                        <Route path="/AboutUs" component={AboutUs} />

                        <Route path="/Events" component={Events} />
                        <Route path="/favorit" component={Favori} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}
