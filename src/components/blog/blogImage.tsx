import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';

const AlignImageCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0;

  @media (${mediaWidths.mobile}) {
    margin: 32px 0;
  }
`;

export const BlogImage = styled.img`
  max-width: 100%;
`;

type PostImageProps = {
  alt: string;
  src: string;
};

export const PostImage = ({ alt, src }: PostImageProps) => {
  return (
    <AlignImageCenter>
      <BlogImage alt={alt} src={src} />
    </AlignImageCenter>
  );
};
