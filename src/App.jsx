import './App.css';
import { useEffect, useState } from 'react';
import * as Frontegg from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = Frontegg.useAuth();
  const loginWithRedirect = Frontegg.useLoginWithRedirect();
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = Frontegg.ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={logout}>Click to logout</button>
          </div>
          <div>
            <button onClick={() => setShowSettings(true)}>Settings</button>
          </div>
          {showSettings && (
            <div>
              {/* The AdminPortal modal will appear over the app */}
              <Frontegg.AdminPortal />
              {/* Optionally, you can provide instructions to use the "X" in the modal to close */}
              <button
                style={{
                  position: 'fixed',
                  top: 20,
                  right: 20,
                  zIndex: 2000,
                  background: 'white',
                  border: '1px solid #ccc',
                  padding: '8px 16px',
                  borderRadius: '4px'
                }}
                onClick={() => setShowSettings(false)}
              >
                Close Settings (if modal doesn't close)
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button onClick={loginWithRedirect}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;