import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import { Emoji } from '../../components/emoji';
import { Paragraph, Highlight } from '../../components/typography';
import { Spacer } from '../../components/spacer';

const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0;
`;

export const Top = () => {
  return (
    <Section>
      <TopStyle>
        <TopTitle>
          Hola! I'm <Highlight>Anthony.</Highlight>
        </TopTitle>
        <Spacer />
        <Paragraph>
          I'm a <b>Web Developer</b> working on Bitcoin and the Lightning
          Network currently living in the beautiful city of Munich, Germany{' '}
          <Emoji label={'lightning'} symbol={'🇩🇪'} />. I'm from Bogotá, Colombia{' '}
          <Emoji label={'lightning'} symbol={'🇨🇴'} />, or how they like to call
          us back home: Un Rolo. I'm a professional React developer with a huge
          passion for NodeJS and React.
        </Paragraph>
        <Paragraph>
          I specialize in creating user interfaces and developing applications
          on top of the
          <b> Lightning Network </b>
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
