import styles from '../../pages/User/user.module.css';
type Props = {
  imageURL: string;
  text: string;
};
const UserInfo = ({ imageURL, text }: Props) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center mt-4 ${styles.userInfoImage}`}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className='text-uppercase'>{text}</h3>
    </div>
  );
};

export default UserInfo;
