import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import RootLayout from './components/RootLayout';
import RootBoundary from './components/ui/RootBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <RootBoundary />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
