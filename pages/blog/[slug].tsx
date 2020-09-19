import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
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
import { Meta } from '../../src/components/meta';
import { PostLink } from '../../src/components/blog/postLink';

export default function Post({ post, previous, next }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Meta
        title={post.title}
        description={post.excerpt}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.coverImage}
      />
      <Spacer mobileAmount={'60px'} />
      <Navigation previous={previous} next={next} />
      <Section sectionWidth={'800px'}>
        <PostTitle>{post.title}</PostTitle>
        <PostDate
          date={post.date}
          bottomMargin={post.update ? '4px' : undefined}
        />
        {post.update && <PostDate date={post.update} text={'Updated: '} />}
        <BlogImage alt={post.title} src={post.coverImage} />
        <ReactMarkdown
          source={post.content}
          renderers={{
            code: CodeBlock,
            inlineCode: CodeBlock,
            paragraph: PostParagraph,
            image: PostImage,
            link: PostLink,
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
    'update',
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
