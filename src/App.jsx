import Home from './Home';
import Blog from './Blog';
import About from './About';
import Layout from './Layout';
import Privacy from './Privacy';
import NotFound from './NotFound';
import BlogDetails from "./BlogDetails";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {path: '' , element: <Layout/>, children: [
    {path: 'home' , element: <Navigate to={'/'}/>},
    {index: true , element: <Home/>},
    {path: 'blog' , element: <Blog/>},
    {path:'blog/:slug' , element: <BlogDetails/>},
    {path: 'about' , element: <About/>},
    {path: 'privacy' , element: <Privacy/>},
    {path: '*' , element: <NotFound/>}
  ]}
],
{ basename: '/' }
);
export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}


