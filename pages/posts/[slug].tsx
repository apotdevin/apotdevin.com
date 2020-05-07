import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
// import Head from 'next/head';
// import { CMS_NAME } from '../../lib/constants';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../../src/components/codeBlock';
import { Section } from '../../src/components/section';

export default function Post({ post, morePosts, preview }) {
  console.log({ post, morePosts, preview });
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Section>
      <ReactMarkdown source={post.content} renderers={{ code: CodeBlock }} />
    </Section>
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta property="og:image" content={post.ogImage.url} />
    //           </Head>
    //           <PostHeader
    //             title={post.title}
    //             coverImage={post.coverImage}
    //             date={post.date}
    //             author={post.author}
    //           />
    //           <PostBody content={post.content} />
    //         </article>
    //       </>
    //     )}
    //   </Container>
    // </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
