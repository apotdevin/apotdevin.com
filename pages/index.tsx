import Head from 'next/head';
import { Header } from '../src/components/header';
import styled from 'styled-components';
import { Footer } from '../src/components/footer';
import { Top } from '../src/views/home/Top';
import { Projects } from '../src/views/home/Projects';
import { Tech } from '../src/views/home/Tech';
import { Contact } from '../src/views/home/Contact';
import { Bitcoin } from '../src/components/bitcoin';
// import { getAllPosts } from '../lib/api';

export const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const HeaderBodyWrapper = styled.div`
  padding-bottom: 160px;
`;

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <div>
      <Head>
        <title>AP - Web Dev and Bitcoin Enthusiast</title>
      </Head>
      <PageWrapper>
        <HeaderBodyWrapper>
          <Header />
          <Top />
          <Projects />
          <Bitcoin />
          <Tech />
          <Contact />
        </HeaderBodyWrapper>
        <Footer />
      </PageWrapper>
    </div>
  );
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ]);

//   return {
//     props: { allPosts },
//   };
// }
