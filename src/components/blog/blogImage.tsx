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

const BlogImage = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  margin: 0;

  @media (${mediaWidths.mobile}) {
    height: 140px;
  }
`;

const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 32px 0 64px;
`;

export const CoverImage = ({ alt, src }: PostImageProps) => (
  <Cover>
    <Image alt={alt} src={src} layout={'fill'} objectFit={'cover'} />
  </Cover>
);

type PostImageProps = {
  alt: string;
  src: string;
};

export const PostImage = ({ alt, src }: PostImageProps) => {
  return (
    <AlignImageCenter>
      <BlogImage>
        <Image alt={alt} src={src} layout={'fill'} objectFit={'contain'} />
      </BlogImage>
    </AlignImageCenter>
  );
};
