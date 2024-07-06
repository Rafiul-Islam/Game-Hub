import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;
