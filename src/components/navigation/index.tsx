import * as React from 'react';
import Link from 'next/link';
import { Section } from '../section';
import styled from 'styled-components';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

type PostProps = {
  slug?: string;
  title?: string;
};

type NavigationProps = {
  previous: PostProps;
  next: PostProps;
};

const NavigationRow = styled.div`
  display: flex;
  cursor: pointer;
`;

const Half = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  :hover {
    font-weight: bold;
  }
`;

const HalfRow = styled(Half)`
  justify-content: flex-start;
  text-align: left;
`;

const HalfRightRow = styled(Half)`
  justify-content: flex-end;
  text-align: right;
`;

const TextWrap = styled.div`
  font-size: 16px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NavigationPadding = styled.div`
  margin: 16px 0;
`;

export const Navigation = ({ previous, next }: NavigationProps) => {
  return (
    <NavigationPadding>
      <Section sectionWidth={'750px'}>
        <NavigationRow>
          {previous.title ? (
            <Link href={`/blog/${previous.slug}`}>
              <HalfRow>
                <ChevronsLeft size={24} />
                <TextWrap>{previous.title}</TextWrap>
              </HalfRow>
            </Link>
          ) : (
            <HalfRow />
          )}
          {next.title ? (
            <Link href={`/blog/${next.slug}`}>
              <HalfRightRow>
                <TextWrap>{next.title}</TextWrap>
                <ChevronsRight size={24} />
              </HalfRightRow>
            </Link>
          ) : (
            <HalfRightRow />
          )}
        </NavigationRow>
      </Section>
    </NavigationPadding>
  );
};
