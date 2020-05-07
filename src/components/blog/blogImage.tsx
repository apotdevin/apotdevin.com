import styled from 'styled-components';

const AlignImageCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BlogImage = styled.img`
  max-width: 100%;
`;

type PostImageProps = {
  alt?: string;
  src: string;
};

export const PostImage = ({ alt, src }: PostImageProps) => {
  return (
    <AlignImageCenter>
      <BlogImage alt={alt} src={src} />
    </AlignImageCenter>
  );
};
