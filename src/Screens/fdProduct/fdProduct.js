import React, { useState } from "react";
import {
  Breadcrumb,
  Container,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as jsPDF from "jspdf";
import "jspdf-autotable";

const FdProduct = () => {
  const [showNewFdModal, setShowNewFdModal] = useState(false);
  const [productData, setProductData] = useState({
    product: null,
    interestRate: "",
    term: "",
    description: "",
    startDate: null,
  });
  const [tableData, setTableData] = useState([
    { id: 1, firstName: "Clark", lastName: "Kent", email: "clarkkent@mail.com", status: "Awaiting for Approve" },
    { id: 2, firstName: "Bruce", lastName: "Wayne", email: "batman@gotham.com", status: "Active" },
    { id: 3, firstName: "Diana", lastName: "Prince", email: "wonderwoman@themyscira.com", status: "Inactive" },
    { id: 4, firstName: "Steve", lastName: "Rogers", email: "captainamerica@shield.com", status: "Active" },
    { id: 5, firstName: "Natasha", lastName: "Romanoff", email: "blackwidow@shield.com", status: "Awaiting for Approve" },
    { id: 6, firstName: "Tony", lastName: "Stark", email: "ironman@starkindustries.com", status: "Active" },
    { id: 7, firstName: "Peter", lastName: "Parker", email: "spiderman@dailybuglenews.com", status: "Inactive" },
    { id: 8, firstName: "Thor", lastName: "Odinson", email: "thor@asgard.com", status: "Active" },
    { id: 9, firstName: "Loki", lastName: " Laufeyson", email: "loki@asgard.com", status: "Inactive" },
    { id: 10, firstName: "Charles", lastName: "Xavier", email: "professorx@xmen.com", status: "Active" },
    { id: 11, firstName: "Erik", lastName: "Lensherr", email: "magneto@brotherhood.com", status: "Inactive" },
    { id: 12, firstName: "Jean", lastName: "Grey", email: "phoenix@xmen.com", status: "Awaiting for Approve" },
    { id: 13, firstName: "Logan", lastName: "Wolverine", email: "wolverine@xmen.com", status: "Active" },
    { id: 14, firstName: "Ororo", lastName: "Munroe", email: "storm@xmen.com", status: "Inactive" },
    { id: 15, firstName: "Scott", lastName: "Summers", email: "cyclops@xmen.com", status: "Active" }
  ]  
  );
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleOpenNewFdModal = () => {
    setShowNewFdModal(true);
  };

  const handleCloseNewFdModal = () => {
    setShowNewFdModal(false);
    setProductData({
      ...productData, // Reset form fields on modal close
      product: null,
      interestRate: "",
      term: "",
      description: "",
      startDate: null,
    });
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#fdTable" });
    doc.save("fd_table.pdf");
  };

  const handleExportExcel = () => {
    // Implement Excel export logic here
  };

  const handleEdit = (id) => {
    setActiveId(id);
    setShowEditModal(true);
  };

  const handleView = (id) => {
    setActiveId(id);
    setShowViewModal(true);
  };

  const handleActivate = (id) => {
    // Implement activation logic here
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    // ...
    console.log("Form submitted:", productData); // Example logging
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Fixed Deposit Product</Breadcrumb.Item>
        </Breadcrumb>
        <Button variant="primary" onClick={handleOpenNewFdModal}>
          + New Fixed Deposit Product
        </Button>
      </div>

      <Table id="fdTable" className="table table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.status}</td>
              <td>
                <Button
                  variant="outline-primary"
                  className="mx-2"
                  onClick={() => handleEdit(data.id)}
                >
                  <i className="bi bi-pencil-square"></i> Edit
                </Button>
                <Button
                  variant="outline-info"
                  className="mx-2"
                  onClick={() => handleView(data.id)}
                >
                  <i className="bi bi-eye"></i> View
                </Button>
                <Button
                  variant="success"
                  className="mx-2"
                  onClick={() => handleActivate(data.id)}
                >
                  <i className="bi bi-check-circle"></i> Activate
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showNewFdModal} onHide={handleCloseNewFdModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Fixed Deposit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="align-items-center">
              {" "}
              {/* Ensure labels and inputs are aligned */}
              <Col>
                <Form.Label column>Select Product</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Interest Rate"
                  value={productData.interestRate}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      interestRate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label column>Interest Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Interest Rate"
                  value={productData.interestRate}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      interestRate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label column>Start Date</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                />
              </Col>
              <Col>
                <Form.Label column>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Description"
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="align-items-center">
              {" "}
              {/* Ensure labels and inputs are aligned */}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNewFdModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        {/* Add modal content for edit */}
        <Modal.Header closeButton>
          <Modal.Title>Create New Fixed Deposit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="align-items-center">
              {" "}
              {/* Ensure labels and inputs are aligned */}
              <Col>
                <Form.Label column>Select Product</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Interest Rate"
                  value={productData.interestRate}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      interestRate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label column>Interest Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Interest Rate"
                  value={productData.interestRate}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      interestRate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label column>Start Date</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                />
              </Col>
              <Col>
                <Form.Label column>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Description"
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="align-items-center">
              {" "}
              {/* Ensure labels and inputs are aligned */}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNewFdModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        {/* Add modal content for view */}
        <Modal.Header closeButton>
          <Modal.Title>Create New Fixed Deposit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="align-items-center">
              {" "}
              {/* Ensure labels and inputs are aligned */}
              <Col>
                <Form.Label column>Select Product</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Interest Rate"
                  value={productData.interestRate}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      interestRate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label column>Interest Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Interest Rate"
                  value={productData.interestRate}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      interestRate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label column>Start Date</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                />
              </Col>
              <Col>
                <Form.Label column>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Description"
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="align-items-center">
              {" "}
              {/* Ensure labels and inputs are aligned */}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNewFdModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation modal for activation */}
    </Container>
  );
};

export default FdProduct;
