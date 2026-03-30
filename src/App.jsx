import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SinglePost } from "./pages/SinglePost";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <SinglePost /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "create", element: <CreatePost /> },
      { path: "edit/:id", element: <EditPost /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}