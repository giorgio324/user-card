import { Form } from 'react-bootstrap';

type Props = {
  name: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const FormImageField = ({ label, name, setValue }: Props) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFileList = e.target.files;
    if (imageFileList && imageFileList.length > 0) {
      const file = imageFileList[0];
      const localImageUrl = window.URL.createObjectURL(file);
      setValue(localImageUrl);
    }
  };

  return (
    <Form.Group
      controlId={`form${name}Image`}
      className='mt-3 text-capitalize roboto-bold'
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control type='file' name={name} onChange={handleImageChange} />
    </Form.Group>
  );
};

export default FormImageField;
