import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Calender from "./calender";
import FdProduct from "../fdProduct/fdProduct";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

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
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
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
        <Col xs lg="2" style={{ position: "sticky", top: navHeight }}>
          <div className="bg-light p-5">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link
                href="/calender"
                onClick={() => {
                  history(`/calender`);
                }}
                eventKey={pathname === `/calender`}
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
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col style={{ overflowY: "auto", maxHeight: "600px" }}>
          {pathname === `/fdProject` && <FdProduct />}
          {pathname === `/calender` && <Calender />}
          {/* <Calender />
          <p class="text-center">
            I recollect that my first exploit in squirrel-shooting was in a
            grove of tall walnut-trees that shades one side of the valley. I had
            wandered into it at noontime, when all nature is peculiarly quiet,
            and was startled by the roar of my own gun, as it broke the Sabbath
            stillness around and was prolonged and reverberated by the angry
          </p>
          <p class="text-center">
            I recollect that my first exploit in squirrel-shooting was in a
            grove of tall walnut-trees that shades one side of the valley. I had
            wandered into it at noontime, when all nature is peculiarly quiet,
            and was startled by the roar of my own gun, as it broke the Sabbath
            stillness around and was prolonged and reverberated by the angry
          </p>
          <p class="text-center">
            I recollect that my first exploit in squirrel-shooting was in a
            grove of tall walnut-trees that shades one side of the valley. I had
            wandered into it at noontime, when all nature is peculiarly quiet,
            and was startled by the roar of my own gun, as it broke the Sabbath
            stillness around and was prolonged and reverberated by the angry
          </p> */}
        </Col>
      </Row>

      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>
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
