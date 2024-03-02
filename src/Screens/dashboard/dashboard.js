import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {
  const [navHeight, setNavHeight] = useState(0); // State to store the height of the Navbar

  // Effect to calculate and set the height of the Navbar when the component mounts
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div>
      <Row>
        <Col xs lg="2" className="bg-light "></Col>
        <Col className="bg-light">
          <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
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
        </Col>
      </Row>
      {/* Placeholder for the Navbar to maintain the layout */}
      <div style={{ height: navHeight }}></div>
      <Row>
        <Col xs lg="2">
          <div className="bg-light p-5">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="600px"
          />
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
          </p>
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
