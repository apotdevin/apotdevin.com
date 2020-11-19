import { Meta } from '../src/components/meta';
import { Section } from '../src/components/section';
import { Spacer } from '../src/components/spacer';
import { SectionTitle, SmallHighlight } from '../src/components/typography';
import Image from 'next/image';
import styled from 'styled-components';

const S = {
  styled: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  row: styled.div`
    display: flex;
  `,
  title: styled.div`
    font-size: 18px;
    margin: 32px 0 16px;
    font-weight: bold;
  `,
  info: styled.div`
    font-size: 16px;
    margin: 40px 0 0;
  `,
};

export default function Index() {
  return (
    <>
      <Meta
        title={'Info | Anthony Potdevin'}
        ogTitle={'Info | Anthony Potdevin'}
        ogImage={'/assets/home/Cover.png'}
      />
      <Spacer mobileAmount={'48px'} />
      <Section>
        <S.styled>
          <SectionTitle>
            <SmallHighlight>Pictures</SmallHighlight>
          </SectionTitle>
          <S.title>Low Resolution</S.title>
          <S.row>
            <Image
              src={'/assets/info/LowWithBackground.png'}
              width={200}
              height={200}
              unoptimized={true}
            />
            <Image
              src={'/assets/info/LowWithoutBackground.png'}
              width={200}
              height={200}
              unoptimized={true}
            />
          </S.row>
          <S.title>High Resolution</S.title>
          <S.row>
            <Image
              src={'/assets/info/WithBackground.png'}
              width={200}
              height={200}
              unoptimized={true}
            />
            <Image
              src={'/assets/info/WithoutBackground.png'}
              width={200}
              height={200}
              unoptimized={true}
            />
          </S.row>
          <S.info>Right click the image to save.</S.info>
        </S.styled>
      </Section>
    </>
  );
}
