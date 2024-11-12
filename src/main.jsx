import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import SigUp from './Components/SigUp';
import AuthProvuder from './Components/Provider/AuthProvuder';
import Order from './Components/Order';
import ProvideOder from './Components/ProvideOder';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/singup',
        element: <SigUp />,
      },
      {
        path: '/order',
        element: (
          <ProvideOder>
            <Order />,
          </ProvideOder>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvuder>
      <RouterProvider router={router} />
    </AuthProvuder>
  </StrictMode>
);
