import { Fragment } from 'react';
import { getAllPosts } from '../../lib/api';
import { Meta } from '../../src/components/meta';
import { Section } from '../../src/components/section';
import { Spacer } from '../../src/components/spacer';
import {
  Paragraph,
  SectionTitle,
  SmallHighlight,
} from '../../src/components/typography';
import styled from 'styled-components';
import { format } from 'date-fns';
import Link from 'next/link';
import { mediaWidths } from '../../src/styles/ThemeColors';
import Image from 'next/image';

const StyledPost = styled.div`
  margin: 32px 0;
  display: flex;
  width: 100%;
  min-height: 200px;
  cursor: pointer;

  @media (${mediaWidths.mobile}) {
    flex-direction: column;
  }
`;

const StyledImage = styled.div`
  position: relative;
  min-width: 240px;
  margin-right: 16px;

  @media (${mediaWidths.mobile}) {
    margin-right: 0;
    width: 100%;
    height: 160px;
  }
`;

const StyledTitle = styled.div`
  font-size: 20px;
  margin: 16px 0 8px;
  font-weight: 900;
`;

const StyledDate = styled.div`
  margin-bottom: 16px;
`;

const StyledParagraph = styled.div`
  font-size: 16px;
  line-height: 150%;
`;

export default function Index({ allPosts }) {
  const renderPost = post => {
    return (
      <Link href={`/blog/${post.slug}`}>
        <StyledPost>
          <StyledImage>
            <Image src={post.coverImage} layout={'fill'} objectFit={'cover'} />
          </StyledImage>
          <div>
            <StyledTitle>{post.title}</StyledTitle>
            <StyledDate>
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </StyledDate>
            <StyledParagraph>{post.excerpt}</StyledParagraph>
          </div>
        </StyledPost>
      </Link>
    );
  };

  return (
    <>
      <Meta
        title={'Blog | Anthony Potdevin'}
        description={
          'I am Anthony Potdevin, a professional software engineer focused on using the most up-to-date tech stack to bring the most value to projects. Also I really like Bitcoin.'
        }
        ogTitle={'Blog | Anthony Potdevin'}
        ogDescription={
          'I am Anthony Potdevin, a professional software engineer focused on using the most up-to-date tech stack to bring the most value to projects. Also I really like Bitcoin.'
        }
        ogImage={'/assets/home/Cover.png'}
      />
      <Spacer mobileAmount={'48px'} />
      <Section>
        <SectionTitle>
          <SmallHighlight>Blog Posts</SmallHighlight>
        </SectionTitle>
        <Paragraph>
          Hi! These are all the blogs posts that I have. The main focus is
          towards software development, Bitcoin and the Lightning Network. Feel
          free to look around!
        </Paragraph>
        {allPosts.map((post, index) => (
          <Fragment key={index}>{renderPost(post)}</Fragment>
        ))}
      </Section>
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
