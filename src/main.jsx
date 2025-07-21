import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-3am33oq6cflb.frontegg.com',
  clientId: '13fd87aa-5410-4b99-8562-2f054603a503',
  appId: '6bcd052e-02e7-4fcf-9117-1a3482454d0d'
};

const authOptions = {
  keepSessionAlive: true
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
); 