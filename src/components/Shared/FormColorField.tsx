import { Form } from 'react-bootstrap';

type Props = {
  name: string;
  label: string;
  controlId: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormColorField = ({ label, controlId, name, onChange, value }: Props) => {
  return (
    <Form.Group controlId={controlId} className='d-flex flex-column'>
      <Form.Label className='text-uppercase roboto-bold'>{label}</Form.Label>
      <Form.Control
        type='color'
        name={name}
        onChange={onChange}
        value={value}
      />
    </Form.Group>
  );
};

export default FormColorField;
