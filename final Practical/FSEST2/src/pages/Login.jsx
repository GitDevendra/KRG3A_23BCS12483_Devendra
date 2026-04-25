import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Auth.css';

export function Login() {
  const { isAuthenticated, toggleAuthentication } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <p className="auth-status">
          Status: <span className={isAuthenticated ? 'authenticated' : 'not-authenticated'}>
            {isAuthenticated ? ' Authenticated' : ' Not Authenticated'}
          </span>
        </p>
        <button 
          className="toggle-btn"
          onClick={toggleAuthentication}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <p className="info-text">
          {isAuthenticated 
            ? 'You are now logged in. You can access the dashboard.' 
            : 'Click the button above to login and access the dashboard.'}
        </p>
      </div>
    </div>
  );
}
