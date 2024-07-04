import { useAppSelector } from '../../hooks/reduxTypedHooks';
import { selectUser } from '../../store/slices/userSlice';

const User = () => {
  const user = useAppSelector(selectUser);
  console.log(user);
  return <img src={user?.image} alt='' />;
};

export default User;
