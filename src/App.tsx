import "./App.css";
import Home from "./pages/Home";
import Root from "./Root";
import HuskyPictures from "./pages/HuskyPictures";
import AreYouLost from "./AreYouLost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import supabase from "./supabaseClient";
import grained from "./grained";
import Blog from "./pages/Blog";
import { useEffect } from "react";

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
  useEffect(() => {
    grained("#grained", {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.05,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
    });
  }, []);
  return (
    <div>
      <div id="grained"></div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
