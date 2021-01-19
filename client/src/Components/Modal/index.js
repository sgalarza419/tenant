import React from "react";

export default function Modal({ open, children, onClose}) {
  if (!open) return null

  return (
    <div>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  )
}