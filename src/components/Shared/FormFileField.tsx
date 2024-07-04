import { useField } from 'formik';
import { Form } from 'react-bootstrap';

type Props = {
  name: string;
  label: string;
  controlId: string;
  required?: boolean;
};

const FormFileField = ({ label, controlId, required, ...props }: Props) => {
  const [_field, meta, helpers] = useField(props);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFileList = e.target.files;
    if (imageFileList && imageFileList.length > 0) {
      const file = imageFileList[0];
      const localImageUrl = window.URL.createObjectURL(file);
      helpers.setValue(localImageUrl);
    }
  };

  return (
    <Form.Group controlId={controlId} className=''>
      <Form.Label>
        {label} {required && <span className='text-danger'>*</span>}
      </Form.Label>
      <Form.Control type='file' {...props} onChange={handleImageChange} />
      <p className='text-danger'>{meta?.error}</p>
    </Form.Group>
  );
};

export default FormFileField;
