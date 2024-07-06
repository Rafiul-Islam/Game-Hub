import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;
