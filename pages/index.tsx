import { Top } from '../src/views/home/Top';
import { Projects } from '../src/views/home/Projects';
import { Tech } from '../src/views/home/Tech';
import { Contact } from '../src/views/home/Contact';
import { Bitcoin } from '../src/components/bitcoin';
import { Posts } from '../src/views/home/Posts';
import { getAllPosts } from '../lib/api';
import { Spacer } from '../src/components/spacer';
import { Meta } from '../src/components/meta';
import { Talks } from '../src/views/home/Talks';
import { PGP } from '../src/views/home/PGP';

export default function Index({ allPosts }) {
  return (
    <>
      <Meta ogImage={'/assets/home/Cover.png'} />
      <Spacer amount={'140px'} mobileAmount={'130px'} />
      <Top />
      <Spacer amount={'80px'} mobileAmount={'60px'} />
      <PGP />
      <Spacer amount={'80px'} mobileAmount={'60px'} />
      <Tech />
      <Spacer />
      <Projects />
      <Spacer />
      <Bitcoin />
      <Spacer />
      <Posts posts={allPosts} />
      <Spacer />
      <Talks />
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
