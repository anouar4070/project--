import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Anouar" body="I mastered ReactJS" />
        <Post author="Max" body="I am learning ReactJS" />
      </ul>
    </>
  );
}

export default PostsList;
