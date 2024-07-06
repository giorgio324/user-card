import { useState } from 'react';
import styles from '../../pages/User/user.module.css';
import FormColorField from '../Shared/FormColorField';
import FormImageField from '../Shared/FormImageField';
import { Button } from 'react-bootstrap';
type Props = {
  imageURL: string;
  text: string;
};
const UserInfo = ({ imageURL, text }: Props) => {
  const [image, setImage] = useState(imageURL);
  const [bgColor, setBgColor] = useState('#000000');
  const handleRemove = () => {
    setImage('');
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center mt-4 ${styles.userInfoImage}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: bgColor,
        }}
      >
        <h3 className='text-uppercase'>{text}</h3>
      </div>
      <div className='d-flex justify-content-between align-items-start mt-2'>
        <FormColorField
          controlId={`form${text}Background`}
          label='background color'
          name={text}
          onChange={handleColorChange}
          value={bgColor}
        />
        <Button onClick={handleRemove}>remove image</Button>
      </div>
      <FormImageField
        label='change background image'
        name={text}
        setValue={setImage}
        value={image}
      />
    </>
  );
};

export default UserInfo;
