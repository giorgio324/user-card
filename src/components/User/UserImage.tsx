import { Image } from 'react-bootstrap';
import styles from '../../pages/User/user.module.css';

type Props = {
  image?: string;
  userName?: string;
};

const UserImage = ({ image, userName }: Props) => {
  return (
    <Image
      src={image}
      alt={`${userName}'s profile photo`}
      roundedCircle
      className={`img-fluid ${styles.userImage}`}
    />
  );
};

export default UserImage;
