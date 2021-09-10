import Head from "next/head";
import Link from "next/link";
import Meta from "../../../components/Meta";
// import { useRouter } from "next/router";
// import axios from "axios";

export default function Post({ post }) {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={post.title} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link href="/posts">Go Back</Link>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

// export const getServerSideProps = (context) => {
//   const result = axios
//     .get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     .then((res) => (result = res.data));
//   const post = result.data;
//   return {
//     props: {
//       post,
//     },
//   };
// };
