import Form from 'react-bootstrap/Form';
import React from 'react'

function PaymentInputs() {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column="lg" lg={2}>
    </Form.Label>
            <Form.Control size="lg" type="text" placeholder="Large text" />
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Normal Text
    </Form.Label>
            <Form.Control size="lg" type="text" placeholder="Large text"/>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Label column="lg" lg={2}>
            Small Text
    </Form.Label>
            <Form.Control size="lg" type="text" placeholder="Large text"/>
        </Form.Row>
      </Form.Group>
    </div>
  )
}

export default PaymentInputs
