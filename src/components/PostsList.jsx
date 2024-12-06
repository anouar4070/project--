
import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";



function PostsList({}) {
const posts = useLoaderData();

  // --- This code causes infinite loop ---
  // fetch("http://localhost:8080/posts")
  //   .then((response) => response.json())
  //   .then((data) => setPosts(data.posts));

  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )} */}
    </>
  );
}

export default PostsList;

/**
 1- PostsList defines addPostHandler to manage new posts.
 2- addPostHandler is passed to the NewPost component via the onAddPost prop.
 3- On submission, NewPost calls onAddPost with the post data.
 4- addPostHandler updates the state in PostsList, which triggers a re-render and displays the updated list of posts.
 */
