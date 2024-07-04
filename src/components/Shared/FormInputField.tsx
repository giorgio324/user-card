import { useField } from 'formik';
import { Form } from 'react-bootstrap';

type FormInputFieldProps = {
  name: string;
  label: string;
  controlId: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
};

const FormInputField: React.FC<FormInputFieldProps> = ({
  controlId,
  label,
  type = 'text',
  placeholder,
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isValid = meta.touched && !meta.error;
  const isInvalid = meta.touched && !!meta.error;

  return (
    <Form.Group controlId={controlId}>
      <Form.Label className='text-capitalize'>
        {label} {required && <span className='text-danger'>*</span>}
      </Form.Label>
      <Form.Control
        {...field}
        {...props}
        type={type}
        placeholder={placeholder}
        isInvalid={isInvalid}
        isValid={isValid}
      />
      {isInvalid && (
        <Form.Control.Feedback type='invalid'>
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FormInputField;
