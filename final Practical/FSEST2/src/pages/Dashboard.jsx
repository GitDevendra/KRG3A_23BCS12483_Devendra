import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Dashboard.css';

export function Dashboard() {
  const { isAuthenticated, toggleAuthentication } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    toggleAuthentication();
    navigate('/login', { replace: true });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1>🎉 Welcome to Dashboard</h1>
          <p className="welcome-text">You have successfully accessed the protected route!</p>
        </div>
        
        <div className="dashboard-content">
          <div className="info-section">
            <h2>Protected Route Information</h2>
            <div className="info-box">
              <p><strong>Route:</strong> <code>/dashboard</code></p>
              <p><strong>Authentication Status:</strong> {isAuthenticated ? '✓ Authenticated' : '✗ Not Authenticated'}</p>
              <p><strong>Access Level:</strong> Protected (requires authentication)</p>
            </div>
          </div>

          <div className="features-section">
            <h2>How This Works</h2>
            <ul className="features-list">
              <li>✓ The <code>/dashboard</code> route is protected by <code>ProtectedRoute</code> component</li>
              <li>✓ Authentication state is managed in <code>AuthContext</code></li>
              <li>✓ Unauthorized users are redirected to <code>/login</code> using <code>Navigate</code> component</li>
              <li>✓ Toggle authentication on the Login page to test redirect behavior</li>
            </ul>
          </div>
        </div>

        <button 
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
