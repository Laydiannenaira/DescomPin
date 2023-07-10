import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const Button = ({ loading, variant, disabled }) => {
  return (
      <ButtonBS variant="variant" disabled={disabled} >
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      {/* <span className="visually-hidden">Loading...</span> */}
    </ButtonBS>
  )
}