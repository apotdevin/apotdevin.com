import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import { Emoji } from '../../components/emoji';
import { Paragraph, Highlight } from '../../components/typography';
import { mediaWidths } from '../../styles/ThemeColors';

const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopTitle = styled.div`
  font-size: 32px;
  font-weight: 800;
  margin: 140px 0 80px;

  @media (${mediaWidths.mobile}) {
    margin: 100px 0 60px;
  }
`;

export const Top = () => {
  return (
    <Section>
      <TopStyle>
        <TopTitle>
          Hola! I'm <Highlight>Anthony.</Highlight>
        </TopTitle>
        <Paragraph>
          I'm a <b>Web Developer</b> with great interest in Bitcoin currently
          living in Germany. I'm from Bogotá, Colombia, or how they like to call
          us back home: Un Rolo. I'm a recent joiner to the <b>React </b>
          community with 3 years as a professional React developer, and have
          loved it ever since. I'm currently living in the beautifull city of
          Munich and work as a frontend dev at an e-commerce.
        </Paragraph>
        <Paragraph>
          Apart from my full-time job, my focus is towards developing
          applications on top of the <b>Lightning Network </b>
          <Emoji label={'lightning'} symbol={'⚡'} />, a second layer payment
          solution for Bitcoin. As an innovative new tech, I know this digital
          currency will <b>disrupt</b> the current financial sector at a global
          scale thus find it extremely important to start building solutions on
          top of it.
        </Paragraph>
      </TopStyle>
    </Section>
  );
};
