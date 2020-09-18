import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '../../src/components/blog/codeBlock';
import { Section } from '../../src/components/section';
import { Spacer } from '../../src/components/spacer';
import { PostParagraph } from '../../src/components/blog/paragraph';
import { PostTitle } from '../../src/components/blog/postTitle';
import { BlogImage, PostImage } from '../../src/components/blog/blogImage';
import { PostDate } from '../../src/components/blog/postDate';
import { Navigation } from '../../src/components/navigation';
import { BlogContact } from '../../src/components/blogContact';

export default function Post({ post, previous, next }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <Spacer mobileAmount={'60px'} />
      <Navigation previous={previous} next={next} />
      <Section sectionWidth={'800px'}>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <BlogImage alt={post.title} src={post.coverImage} />
        <ReactMarkdown
          source={post.content}
          renderers={{
            code: CodeBlock,
            paragraph: PostParagraph,
            image: PostImage,
          }}
        />
      </Section>
      <Navigation previous={previous} next={next} />
      <BlogContact />
    </>
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
    'excerpt',
  ]);

  const posts = getAllPosts(['slug', 'title']);
  let previous = {};
  let next = {};

  for (let i = 0; i < posts.length; i++) {
    const element = posts[i];

    if (element.slug === params.slug) {
      if (i > 0) {
        previous = posts[i - 1];
      }
      if (i < posts.length - 1) {
        next = posts[i + 1];
      }
    }
  }

  return {
    props: {
      post,
      previous,
      next,
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
