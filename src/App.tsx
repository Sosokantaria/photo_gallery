import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { History } from "./pages/history";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { FourOhFour } from "./pages/fourohfour";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        { element: <Home />, path: "/" },
        { element: <History />, path: "/history" },
      ],
    },
    { element: <FourOhFour />, path: "/*" },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
