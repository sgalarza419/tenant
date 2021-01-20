import React from "react";
import Button from 'react-bootstrap/Button'

const MODAL_STYLES = {
  position: 'fixed',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, 50%)',
  backgroundColor: 'teal',
  padding: '5px',
  zIndex: 1000
}

export default function Modal({ open, children, onClose}) {
  if (!open) return null

  return (
    <div style={MODAL_STYLES}>
      {children}
      <Button variant="info" onClick={onClose}>Close</Button>
    </div>
  )
}