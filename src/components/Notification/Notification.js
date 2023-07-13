import { createPortal }  from 'react-dom';
import Alert from 'react-bootstrap/Alert';
import './index.css';

export const Notification = ({message, variant = 'success', onClose }) => {
  return (
    <>
      { createPortal(
        <Alert className='notification' variant={variant} onClose={onClose} dismissible >
          {message}
        </Alert>,
        document.body
      )}
    </>
  )
}
