import * as Yup from 'yup';
import { User } from '../store/slices/userSlice';

export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required('Job Title is required'),
  lastName: Yup.string().required('Job Title is required'),
  /* position: Yup.string().required('Job Title is required'),
  adress: Yup.string().required('Job Title is required'),
  image: Yup.string().required('Job Title is required'),
  instagramLink: Yup.string().required('Job Title is required'),
  facebookLink: Yup.string().required('Job Title is required'),
  twitterLink: Yup.string().required('Job Title is required'),
  linkedInLink: Yup.string().required('Job Title is required'),
  website: Yup.string().required('Job Title is required'),
  imdb: Yup.string().required('Job Title is required'),
  features: Yup.string().required('Job Title is required'),
  contact: Yup.string().required('Job Title is required'), */
});
