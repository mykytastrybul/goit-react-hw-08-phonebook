import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

const StartPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      <Outlet />
    </>
  );
};

export default StartPage;
