import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '*',
        element: <div><h1>OEOEOEOEO</h1></div>,
      },
    ],
  },
]);

export default router;
