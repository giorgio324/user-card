type Props = {
  children: React.ReactNode;
  socialMediaURL: string;
  backgroundColor: string;
  color: string;
};
const UserSocialMediaIcon = ({
  children,
  socialMediaURL,
  backgroundColor = '#fff',
  color = '#000000',
}: Props) => {
  return (
    <a
      href={socialMediaURL}
      target='_blank'
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      className='d-flex p-2 rounded-circle'
    >
      {children}
    </a>
  );
};

export default UserSocialMediaIcon;
