import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import RootLayout from './components/RootLayout';
import Resume from './pages/Resume.page';
import Projects from './pages/Projects.page';
import About from './pages/About.page';
import Aliens from './pages/Aliens.page';
import RootBoundary from './components/RootBoundary';

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
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'aliens',
        element: <Aliens />,
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
