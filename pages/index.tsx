import Head from 'next/head';
import { Top } from '../src/views/home/Top';
import { Projects } from '../src/views/home/Projects';
import { Tech } from '../src/views/home/Tech';
import { Contact } from '../src/views/home/Contact';
import { Bitcoin } from '../src/components/bitcoin';
import { Posts } from '../src/views/home/Posts';
import { getAllPosts } from '../lib/api';
import { Spacer } from '../src/components/spacer';

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>AP - Web Dev and Bitcoin Enthusiast</title>
      </Head>
      <Spacer amount={'140px'} mobileAmount={'100px'} />
      <Top />
      <Spacer amount={'80px'} mobileAmount={'60px'} />
      <Posts posts={allPosts} />
      <Spacer />
      <Projects />
      <Spacer />
      <Bitcoin />
      <Spacer />
      <Tech />
      <Spacer />
      <Contact />
      <Spacer />
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
    'isDraft',
  ]);

  return {
    props: { allPosts },
  };
}
