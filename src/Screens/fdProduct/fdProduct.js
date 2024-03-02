import React, { useState } from 'react';
import {
  Breadcrumb,
  Container,
  Button,
  Modal,
  Form,
  Row,
  Col,
  FormLabel,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const FdProduct = () => {
  const [showNewFdModal, setShowNewFdModal] = useState(false);
  const [productData, setProductData] = useState({
    product: null,
    interestRate: '',
    term: '',
    description: '',
    startDate: null,
  });

  const handleOpenNewFdModal = () => {
    setShowNewFdModal(true);
  };

  const handleCloseNewFdModal = () => {
    setShowNewFdModal(false);
    setProductData({ ...productData, // Reset form fields on modal close
      product: null,
      interestRate: '',
      term: '',
      description: '',
      startDate: null,
    });
  };

  const productOptions = [
    { value: 1, label: 'Product 1' },
    { value: 2, label: 'Product 2' },
  ];

  // Handle form submission (implement your logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    // ...
    console.log('Form submitted:', productData); // Example logging
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
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

      {/* Your other page content goes here */}

      <Modal show={showNewFdModal} onHide={handleCloseNewFdModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Fixed Deposit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="align-items-center"> {/* Ensure labels and inputs are aligned */}
              <Col>
                <Form.Label column>Select Product</Form.Label>
                <Form.Control type="number" placeholder="Enter Interest Rate" value={productData.interestRate} onChange={(e) => setProductData({ ...productData, interestRate: e.target.value })} />
              </Col>
              <Col>
                <Form.Label column>Interest Rate (%)</Form.Label>
                <Form.Control type="number" placeholder="Enter Interest Rate" value={productData.interestRate} onChange={(e) => setProductData({ ...productData, interestRate: e.target.value })} />
              </Col>
              <Col>
                <Form.Label column>Start Date</Form.Label>
                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/dd/yyyy" />
              </Col>
              <Col>
                <Form.Label column>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description" value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
              </Col>
            </Row>
            <Row className="align-items-center"> {/* Ensure labels and inputs are aligned */}
              
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
    </Container>
  );
};

export default FdProduct;
