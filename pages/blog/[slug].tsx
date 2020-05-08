import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
// import { CMS_NAME } from '../../lib/constants';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../../src/components/blog/codeBlock';
import { Section } from '../../src/components/section';
import { Spacer } from '../../src/components/spacer';
import { PostParagraph } from '../../src/components/blog/paragraph';
import { PostTitle } from '../../src/components/blog/postTitle';
import { BlogImage, PostImage } from '../../src/components/blog/blogImage';
import { PostDate } from '../../src/components/blog/postDate';

export default function Post({ post, morePosts, preview }) {
  console.log({ post, morePosts, preview });
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Spacer mobileAmount={'60px'} />
      <Section sectionWidth={'600px'}>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <BlogImage src={post.coverImage} />
        <ReactMarkdown
          source={post.content}
          renderers={{
            code: CodeBlock,
            paragraph: PostParagraph,
            image: PostImage,
          }}
        />
      </Section>
    </>
    // <meta property="og:image" content={post.ogImage.url} />
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
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
