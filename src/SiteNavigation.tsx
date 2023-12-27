import Folder from "./Folder";
import { Link } from "react-router-dom";
import HoverAnimation from "./HoverAnimation";
import { useEffect, useState } from "react";
import supabase from "./supabaseClient";
import Loading from "./Loading";

function SiteNavigation() {
  const [key, setKey] = useState(crypto.randomUUID());
  const [blogs, setBlogs] = useState<{ title: string; slug: string }[]>([]);
  const [isBlogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("blogs")
      .select("title, slug")
      .then((res) => {
        let list: { title: string; slug: string }[] = [];
        res.data?.forEach((row) => {
          list.push({
            title: row.title,
            slug: row.slug,
          });
        });
        setBlogs(list);
        setBlogsLoading(false);
      });
  }, []);

  function renderDestination(to: string, text: string) {
    return (
      <div
        onClick={() => {
          setKey(crypto.randomUUID());
        }}
      >
        <Link to={to}>
          <HoverAnimation text={text} />
        </Link>
      </div>
    );
  }
  return (
    <Folder
      key={key}
      name="SITE NAVIGATION"
      items={[
        renderDestination("/", "Home"),
        renderDestination("/husky-pictures", "Pictures of my husky"),
        <Folder
          name="BLOGS"
          items={
            isBlogsLoading
              ? [<Loading />]
              : blogs.map((blog) =>
                  renderDestination(`/blog/${blog.slug}`, blog.title)
                )
          }
        />,
        <Folder name="FUN" items={[<div>Comming soon</div>]} />,
      ]}
    />
  );
}

export default SiteNavigation;
