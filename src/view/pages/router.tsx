import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <div><h1>OEOEOEOEO</h1></div>,
      },
    ],
  },
]);

export default router;
