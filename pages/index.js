import Head from "next/head";
import { PostCard, Categories, PostWidget, FeaturedPost } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12 col-span-1">
          <FeaturedPost />
        </div>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, idx) => (
            <PostCard post={post.node} key={idx} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// fetch data w Nextjs way, then pass to home as props
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
