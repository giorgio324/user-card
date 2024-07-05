import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import { selectUser } from '../../store/slices/userSlice';
import UserImage from '../../components/User/UserImage';
import { Navigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiLogoVenmo } from 'react-icons/bi';
import UserSocialMediaIcon from '../../components/User/UserSocialMediaIcon';
import styles from '../../pages/User/user.module.css';
import webImage from '../../assets/1.jpg';
import imdbImage from '../../assets/2.jpg';
import featuresImage from '../../assets/3.jpg';
import contactImage from '../../assets/4.jpg';
import commercialImage from '../../assets/5.jpg';
import UserInfo from '../../components/User/UserInfo';
import { useState } from 'react';
import FormColorField from '../../components/Shared/FormColorField';

type FormInputs = {
  iconBackgroundColor: string;
  iconColor: string;
  buttonBackgroundColor: string;
  buttonImage: string;
};

const User = () => {
  const user = useAppSelector(selectUser);

  const initialState: FormInputs = {
    buttonBackgroundColor: '',
    buttonImage: '',
    iconBackgroundColor: '#ffffff',
    iconColor: '#000000',
  };

  const [userColorSettings, setUserColorSettings] =
    useState<FormInputs>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserColorSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userColorSettings);
  };

  if (!user) {
    return <Navigate to={'/'} />;
  }
  return (
    <Container as='main' className=''>
      <section className='d-flex justify-content-center mt-5'>
        <UserImage image={user?.image} userName={user?.name} />
      </section>
      <Row as='section' className='py-2'>
        <Col className='text-center text-uppercase'>
          <h1>
            {user?.name} {user?.lastName}
          </h1>
          <h4 className='text-secondary'>{user.position}</h4>
          <div
            className='d-flex justify-content-center align-items-center'
            style={{ gap: 8 }}
          >
            <p className='text-secondary mt-1'>{user.address}</p>
            <p className='text-secondary mt-1'>|</p>
            <p className='text-secondary mt-1'>{`agency: ${user.agency}`}</p>
          </div>
        </Col>
      </Row>
      <section
        className='d-flex justify-content-center px-2'
        style={{ gap: 24 }}
      >
        <UserSocialMediaIcon
          color={userColorSettings.iconColor}
          backgroundColor={userColorSettings.iconBackgroundColor}
          socialMediaURL={user.venmoURL}
        >
          <BiLogoVenmo className={styles.userIcon} />
        </UserSocialMediaIcon>
        <UserSocialMediaIcon
          color={userColorSettings.iconColor}
          backgroundColor={userColorSettings.iconBackgroundColor}
          socialMediaURL={user.instagramURL}
        >
          <FaInstagram className={styles.userIcon} />
        </UserSocialMediaIcon>
        <UserSocialMediaIcon
          color={userColorSettings.iconColor}
          backgroundColor={userColorSettings.iconBackgroundColor}
          socialMediaURL={user.facebookURL}
        >
          <FaFacebook className={styles.userIcon} />
        </UserSocialMediaIcon>
        <UserSocialMediaIcon
          color={userColorSettings.iconColor}
          backgroundColor={userColorSettings.iconBackgroundColor}
          socialMediaURL={user.twitterURL}
        >
          <FaTwitter className={styles.userIcon} />
        </UserSocialMediaIcon>
        <UserSocialMediaIcon
          color={userColorSettings.iconColor}
          backgroundColor={userColorSettings.iconBackgroundColor}
          socialMediaURL={user.linkedInURL}
        >
          <FaLinkedin className={styles.userIcon} />
        </UserSocialMediaIcon>
      </section>
      <section className='mb-4'>
        <Row className='mt-1'>
          <Col lg={6}>
            <UserInfo imageURL={webImage} text='website' />
          </Col>
          <Col lg={6}>
            <UserInfo imageURL={imdbImage} text='imdb' />
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col lg={6}>
            <UserInfo imageURL={commercialImage} text='commercials' />
          </Col>
          <Col lg={6}>
            <UserInfo imageURL={featuresImage} text='features & television' />
          </Col>
        </Row>
        <Row className='mt-1 '>
          <Col lg={12}>
            <UserInfo imageURL={contactImage} text='contact' />
          </Col>
        </Row>
      </section>
      <Row className='py-4'>
        <h3>settings</h3>
        <FormColorField
          controlId='formColor'
          name='iconBackgroundColor'
          label='iconBackgroundColor'
          onChange={handleChange}
          value={userColorSettings.iconBackgroundColor}
        />
        <FormColorField
          controlId='formiconColor'
          name='iconColor'
          label='iconColor'
          onChange={handleChange}
          value={userColorSettings.iconColor}
        />
      </Row>
    </Container>
  );
};

export default User;
