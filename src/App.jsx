import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Code from "./Pages/Code";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Code",
        element: <Code />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
