import React from "react"
import { Toast } from "react-bootstrap"

const MyToast = (props) => {
const {toast} = props;

  return <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'fixed',    
    minWidth: '250px',
    top:250,
    right:0
  }}
>
  <Toast show={toast.show} 
  onClose={() => props.closeToast()}
  style={{
    position: 'absolute',
    top: 0,
    right: 0,
    }}
    delay={3000}
    autohide    
    >
  <Toast.Header>    
    <strong className="mr-auto">{toast.header}</strong>    
  </Toast.Header>
  <Toast.Body className={toast.classe}>{toast.body}</Toast.Body>
</Toast>

</div>
    }

export default MyToast