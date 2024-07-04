type Props = {
  children: React.ReactNode;
  socialMediaURL: string;
};
const UserSocialMediaIcon = ({ children, socialMediaURL }: Props) => {
  return (
    <a
      href={socialMediaURL}
      target='_blank'
      className='d-flex bg-white p-2 rounded-circle'
    >
      {children}
    </a>
  );
};

export default UserSocialMediaIcon;
