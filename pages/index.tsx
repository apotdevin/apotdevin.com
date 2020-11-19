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

export default function Index({ allPosts }) {
  return (
    <>
      <Meta
        title={'Anthony Potdevin - Software Engineer and Bitcoin Enthusiast'}
        description={
          'I am Anthony Potdevin, a professional software engineer focused on using the most up-to-date tech stack to bring the most value to projects. I also really like Bitcoin.'
        }
        ogTitle={'Anthony Potdevin - Software Engineer and Bitcoin Enthusiast'}
        ogDescription={
          'I am Anthony Potdevin, a professional software engineer focused on using the most up-to-date tech stack to bring the most value to projects. I also really like Bitcoin.'
        }
        ogImage={'/assets/home/Cover.png'}
      />
      <Spacer amount={'140px'} mobileAmount={'100px'} />
      <Top />
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
