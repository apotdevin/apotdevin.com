import { Section } from '../../components/section';
import { SectionTitle, SmallHighlight } from '../../components/typography';
import styled from 'styled-components';
import Image from 'next/image';
import {
  mediaWidths,
  talkBackColor,
  techCardColor,
} from '../../styles/ThemeColors';
import { StyledLink } from '../../components/link';

const Talk = {
  styled: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  box: styled.a`
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 40px 16px;
    border-radius: 16px;
    background-color: ${talkBackColor};
    border: 1px solid ${talkBackColor};

    @media (${mediaWidths.mobile}) {
      flex-direction: column-reverse;
      padding: 16px;
    }

    &:hover {
      border: 1px solid ${techCardColor};
      cursor: pointer;
    }
  `,
  column: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;

    @media (${mediaWidths.mobile}) {
      max-width: 100%;
    }
  `,
  text: styled.div`
    line-height: 170%;
  `,
  title: styled.div`
    font-size: 20px;
    margin: 16px 0 8px;
    font-weight: 900;
  `,
  image: styled.div`
    position: relative;
    width: 50%;
    height: 200px;
    margin-left: 32px;

    @media (${mediaWidths.mobile}) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 16px;
    }
  `,
};

export const Talks = () => {
  return (
    <Section sectionWidth={'800px'}>
      <Talk.styled>
        <SectionTitle>
          <SmallHighlight>Talks</SmallHighlight>
        </SectionTitle>
        <Talk.box
          target={'_blank'}
          href={
            'https://open.spotify.com/episode/012nvvUEEvoUkdaXSCCEFL?si=pbMvAR6kQJqTu3Rv3FsmQg'
          }
        >
          <Talk.column>
            <Talk.title>A Year In Lightning - Lunaticoin</Talk.title>
            <Talk.text>
              This is an episode of a spanish podcast hosted by
              <StyledLink href={'https://twitter.com/lunaticoin'}>
                {' @Lunaticoin '}
              </StyledLink>
              where we talk about a ton of different topics all surrounding the
              lightning network and ThunderHub. From lightning channels, to
              routing nodes, to encrypted chats, this podcast covers a bit of it
              all.
            </Talk.text>
          </Talk.column>
          <Talk.image>
            <Image
              alt={'Lunaticoin L86 podcast'}
              src={'/assets/home/L86-Lunaticoin.jpg'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </Talk.image>
        </Talk.box>
      </Talk.styled>
    </Section>
  );
};
