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
import styled from 'styled-components';

const DraftWarning = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid gold;
  border-radius: 8px;
  padding: 8px 0;
  margin: 64px 0 32px;
  font-weight: 900;
`;

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
        isDraft={post.isDraft}
      />
      <Spacer mobileAmount={'60px'} />
      <Navigation previous={previous} next={next} />
      <Section>
        {post.isDraft && (
          <DraftWarning>
            This post is a draft! Please do not share.
          </DraftWarning>
        )}
        <PostTitle>{post.title}</PostTitle>
        <PostDate
          date={post.date}
          bottomMargin={post.update ? '4px' : undefined}
        />
        {post.update && <PostDate date={post.update} text={'Updated: '} />}
      </Section>
      <Section sectionWidth={'1000px'}>
        <BlogImage alt={post.title} src={post.coverImage} />
      </Section>
      <Section>
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
    'isDraft',
  ]);

  const posts = getAllPosts(['slug', 'title', 'isDraft', 'date']);
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
