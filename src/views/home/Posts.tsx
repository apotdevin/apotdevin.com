import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionTitle, SmallHighlight } from '../../components/typography';
import { format } from 'date-fns';
import { mediaWidths } from '../../styles/ThemeColors';

const PostsStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPosts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledPost = styled.div`
  width: 280px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (${mediaWidths.mobile}) {
    margin: 16px 0;
    width: 100%;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background-color: white;

  @media (${mediaWidths.mobile}) {
    height: 160px;
  }
`;

const PostTitle = styled.div`
  font-size: 20px;
  margin: 16px 0 8px;
  font-weight: 900;
`;

const PostDate = styled.div`
  margin-bottom: 16px;
`;

const PostExcerpt = styled.div`
  line-height: 150%;
  font-size: 18px;
`;

type PostProps = {
  title: string;
  date: string;
  slug: string;
  coverImage: string;
  excerpt: string;
};

type PostsProps = {
  posts?: PostProps[];
};

export const Posts = ({ posts }: PostsProps) => {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  // console.log({ heroPost, morePosts });

  const renderPost = (post: PostProps) => (
    <Link href={`/blog/${post.slug}`}>
      <StyledPost>
        <PostImage alt={post.title} src={post.coverImage} />
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{format(new Date(post.date), 'MMMM dd, yyyy')}</PostDate>
        <PostExcerpt>{post.excerpt}</PostExcerpt>
      </StyledPost>
    </Link>
  );

  return (
    <>
      <Section sectionWidth={'1400px'}>
        <PostsStyled>
          <SectionTitle>
            <SmallHighlight>Posts</SmallHighlight>
          </SectionTitle>
        </PostsStyled>
        <StyledPosts>
          {renderPost(heroPost)}
          {morePosts.map((post, index) => (
            <React.Fragment key={index}>{renderPost(post)}</React.Fragment>
          ))}
        </StyledPosts>
      </Section>
    </>
  );
};
