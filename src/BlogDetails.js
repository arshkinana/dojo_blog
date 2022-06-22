import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <body>{blogs.body}</body>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
