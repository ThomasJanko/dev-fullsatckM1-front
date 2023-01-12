import { useContext, useEffect } from 'react';
import { AuthContext } from './Context';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

export default function ProtectedRoute() {
  const auth = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      history.push('/auth/login');
    }
  }, [auth, history]);

  return (
    // component content
    <LoginForm/>
  );
}