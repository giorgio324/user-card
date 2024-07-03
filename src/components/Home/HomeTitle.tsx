import { Container, Row } from 'react-bootstrap';

const HomeTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container as='section' className='d-flex justify-content-center mt-4'>
      <Row className='text-capitalize border border-white rounded p-2 w-100'>
        <h1 className='text-center roboto-bold'>{children}</h1>
      </Row>
    </Container>
  );
};

export default HomeTitle;
