import "./App.css";
import Home from "./Home";
import Root from "./Root";
import HuskyPictures from "./HuskyPictures";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "secret",
        element: (
          <>This is a secret don't tell anyone but Vansh Kansara is GAY</>
        ),
      },
      {
        path: "husky-pictures",
        element: <HuskyPictures />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
