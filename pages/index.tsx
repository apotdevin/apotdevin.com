import Head from 'next/head';
import { Top } from '../src/views/home/Top';
import { Projects } from '../src/views/home/Projects';
import { Tech } from '../src/views/home/Tech';
import { Contact } from '../src/views/home/Contact';
import { Bitcoin } from '../src/components/bitcoin';
import { getAllPosts } from '../lib/api';

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>AP - Web Dev and Bitcoin Enthusiast</title>
      </Head>
      <Top />
      <Projects />
      <Bitcoin />
      <Tech />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
