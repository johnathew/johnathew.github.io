import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <HomePage />,
    }]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
