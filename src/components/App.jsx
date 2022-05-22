import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import StartPage from 'pages/StartPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { current } from 'redux/auth/authThunk';
import Loader from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const loading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return !loading ? (
    <>
      <Routes>
        <Route path="/*" element={<StartPage />}>
          {!isLoggedIn && (
            <>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </>
          )}
          {isLoggedIn && <Route path="contacts" element={<ContactsPage />} />}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? '/contacts' : '/register'} />}
          />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
}
