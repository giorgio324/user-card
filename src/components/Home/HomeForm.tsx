import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { User } from '../../store/slices/userSlice';
import FormInputField from '../Shared/FormInputField';
import { Formik, FormikProps } from 'formik';
import { userValidationSchema } from '../../schema/userValidationSchema';

const HomeForm = () => {
  const initialState: User = {
    name: '',
    lastName: '',
    position: '',
    adress: '',
    image: '',
    instagramLink: '',
    facebookLink: '',
    twitterLink: '',
    linkedInLink: '',
    website: '',
    imdb: '',
    features: '',
    contact: '',
  };

  const handleSubmit = (values: User) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={userValidationSchema}
    >
      {({ values, handleSubmit }: FormikProps<User>) => {
        return (
          <Container>
            <Row className='justify-content-center py-5 roboto'>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormInputField
                        name='name'
                        controlId='formName'
                        placeholder='name'
                        label='name'
                        type='text'
                      />
                    </Col>
                    <Col md={6}>
                      <FormInputField
                        name='lastName'
                        controlId='formLastName'
                        placeholder='lastName'
                        label='lastName'
                        type='text'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <Button variant='primary' type='submit'>
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
