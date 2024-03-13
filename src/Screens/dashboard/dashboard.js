import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Calender from "./calender";
import FdProduct from "../fdProduct/fdProduct";
import Users from "../Users/users";
import "./dashboard.css";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { FaBook } from "react-icons/fa";

function App() {
  const [navHeight, setNavHeight] = useState(0); // State to store the height of the Navbar
  let location = useLocation();
  const { pathname } = location;
  const history = useNavigate();

  // Effect to calculate and set the height of the Navbar when the component mounts
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div>
      <div
        class=" bg-body-tertiary text-center"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          padding: 0,
        }}
      >
        <div class="row">
          <div class="bg-body-tertiary col-2"></div>
          <div class="col" style={{ padding: 0 }}>
            <Navbar
              expand="lg"
              className="bg-body-tertiary"
              style={{ border: "1px solid #ccc" }}
            >
              <Container style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">
                      <FaBook style={{ marginRight: "5px" }} />
                      <span className="nav-link-text">Home</span>
                    </Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>

      {/* Placeholder for the Navbar to maintain the layout */}
      <div style={{ height: navHeight }}></div>
      <Row>
        <Col xs lg="2" style={{ position: "fixed", top: `${navHeight}px` }}>
          <div
            className="bg-light p-5"
            style={{
              height: `calc(94.9vh - ${navHeight}px)`,
              border: "1px solid #ccc",
            }}
          >
            <Nav defaultActiveKey="/dashboard" className="flex-column">
              <Nav.Link
                onClick={() => {
                  history(`/dashboard`);
                }}
                eventKey={pathname === `/dashboard`}
              >
                Calender
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history(`/fdProject`);
                }}
                eventKey={pathname === `/fdProject`}
              >
                FD Project
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history(`/users`);
                }}
                eventKey={pathname === `/users`}
              >
                User Creation
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col xs lg="2"></Col>
        <Col
          style={{
            overflowY: "auto",
            maxHeight: `calc(94.9vh - ${navHeight}px)`,
          }}
        >
          {pathname === `/dashboard` && <Calender />}
          {pathname === `/fdProject` && <FdProduct />}

          {pathname === `/users` && <Users />}
        </Col>
      </Row>

      <footer
        className="footer"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <Container className="footer-container">
          <Row>
            <Col>
              <p
                style={{
                  textAlign: "center",
                  height: "5vh",
                  marginBottom: 0,
                }}
              >
                Copyright © {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
