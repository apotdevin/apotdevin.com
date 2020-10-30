import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';
import Image from 'next/image';

const AlignImageCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0;

  @media (${mediaWidths.mobile}) {
    width: 100vw;
    margin: 32px -16px 32px;
  }
`;

type BlogImageProps = {
  withMargin: string;
};

export const BlogImage = styled(Image)<BlogImageProps>`
  width: 100%;
  height: 100%;
  margin: ${({ withMargin }) => withMargin || '32px 0 64px'};
`;

type PostImageProps = {
  alt: string;
  src: string;
};

export const PostImage = ({ alt, src }: PostImageProps) => {
  return (
    <AlignImageCenter>
      <BlogImage alt={alt} src={src} withMargin={'0'} />
    </AlignImageCenter>
  );
};
