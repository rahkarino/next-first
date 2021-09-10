import Head from "next/head";
import styles from "../styles/Posts.module.css";
import Link from "next/link";
import Meta from "../components/Meta";

export default function Posts({ posts }) {
  return (
    <>
      <Meta title="Post list page" />
      <h1>Post page</h1>
      <div className={styles.grid}>
        {posts.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <h3>
                <Link href="/post/[id]" as={`/post/${item.id}`}>
                  {item.title}
                </Link>
              </h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
