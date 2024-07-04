import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { setUser, User } from '../../store/slices/userSlice';
import FormInputField from '../Shared/FormInputField';
import { Formik, FormikProps } from 'formik';
import { userValidationSchema } from '../../schema/userValidationSchema';
import FormFileField from '../Shared/FormFileField';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxTypedHooks';

const HomeForm = () => {
  const initialState: User = {
    name: '',
    lastName: '',
    position: '',
    address: '',
    agency: '',
    image: '',
    venmoURL: '',
    instagramURL: '',
    facebookURL: '',
    twitterURL: '',
    linkedInURL: '',
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = (values: User) => {
    console.log(values);
    dispatch(setUser(values));
    navigate('/user');
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={userValidationSchema}
    >
      {({ handleSubmit }: FormikProps<User>) => {
        return (
          <Container>
            <Row className='justify-content-center py-5 roboto'>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Row className='py-2 gy-3'>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='name'
                        controlId='formName'
                        placeholder='name'
                        label='name'
                        type='text'
                        required
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='lastName'
                        controlId='formLastName'
                        placeholder='lastName'
                        label='last name'
                        required
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='position'
                        controlId='formPosition'
                        placeholder='position'
                        label='position'
                        required
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='address'
                        controlId='formAddress'
                        placeholder='address'
                        label='address'
                      />
                    </Col>
                  </Row>
                  <Row className='py-2 gy-3'>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='agency'
                        controlId='formAgency'
                        placeholder='agency'
                        label='Agency'
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='instagramURL'
                        controlId='formInstagramURL'
                        placeholder='instagram URL'
                        label='Instagram URL'
                        required
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='facebookURL'
                        controlId='formFacebookURL'
                        placeholder='facebook URL'
                        label='Facebook URL'
                        required
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='twitterURL'
                        controlId='formTwitterURL'
                        placeholder='twitter URL'
                        label='Twitter URL'
                        required
                      />
                    </Col>
                  </Row>
                  <Row className='py-2 gy-3'>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='linkedInURL'
                        controlId='formLinkedInURL'
                        placeholder='linkedIn URL'
                        label='LinkedInURL'
                        required
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='venmoURL'
                        controlId='formVenmoURL'
                        placeholder='venmo URL'
                        label='Venmo URL'
                        required
                      />
                    </Col>
                    <Col md={12} lg={6}>
                      <FormFileField
                        name='image'
                        controlId='formImage'
                        label='Image'
                        required
                      />
                    </Col>
                  </Row>
                  <Row className='mt-4 justify-content-center'>
                    <Button variant='primary' type='submit' className='w-25'>
                      Submit
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        );
      }}
    </Formik>
  );
};

export default HomeForm;
