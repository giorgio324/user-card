import * as Yup from 'yup';

export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  position: Yup.string().required('Position is required'),
  address: Yup.string().notRequired(),
  agency: Yup.string().notRequired(),
  image: Yup.string().required('Image is required'),
  venmoURL: Yup.string().required('Venmo URL is required'),
  instagramURL: Yup.string().required('Instagram URL is required'),
  facebookURL: Yup.string().required('Facebook URL is required'),
  twitterURL: Yup.string().required('Twitter URL is required'),
  linkedInURL: Yup.string().required('LinkedIn URL is required'),
});
