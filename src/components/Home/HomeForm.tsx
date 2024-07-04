import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { User } from '../../store/slices/userSlice';
import FormInputField from '../Shared/FormInputField';
import { Formik, FormikProps } from 'formik';
import { userValidationSchema } from '../../schema/userValidationSchema';
import FormFileField from '../Shared/FormFileField';

const HomeForm = () => {
  const initialState: User = {
    name: '',
    lastName: '',
    position: '',
    address: '',
    image: '',
    instagramURL: '',
    facebookURL: '',
    twitterURL: '',
    linkedInURL: '',
    website: '',
    imdb: '',
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
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='linkedInURL'
                        controlId='formLinkedInURL'
                        placeholder='linkedIn URL'
                        label='LinkedInURL'
                        required
                      />
                    </Col>
                  </Row>
                  <Row className='py-2 gy-3'>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='website'
                        controlId='formWebsite'
                        placeholder='website URL'
                        label='Website URL'
                      />
                    </Col>
                    <Col md={6} lg={3}>
                      <FormInputField
                        name='imdb'
                        controlId='formImdb'
                        placeholder='imdb URL'
                        label='imdb URL'
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
