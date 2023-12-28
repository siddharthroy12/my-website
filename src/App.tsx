import "./App.css";
import Home from "./pages/Home";
import Root from "./Root";
import HuskyPictures from "./pages/HuskyPictures";
import AreYouLost from "./AreYouLost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import supabase from "./supabaseClient";
import Blog from "./pages/Blog";

async function blogLoader({ params }: any) {
  const blog = await supabase
    .from("blogs")
    .select("slug, title, content, created_at")
    .eq("slug", params.id);

  if (blog.data === null) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return blog?.data[0];
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <AreYouLost />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "secret",
        element: <>🍪</>,
      },
      {
        path: "blog/:id",
        loader: blogLoader,
        element: <Blog />,
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
