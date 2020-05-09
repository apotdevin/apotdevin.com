import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import {
  Paragraph,
  SectionTitle,
  SmallHighlight,
} from '../../components/typography';
import { contactCardColor, textColor } from '../../styles/ThemeColors';
import { Twitter, Send, GitHub } from 'react-feather';

const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactCardBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
  width: 100%;
  max-width: 600px;
`;

const ContactCards = styled.div`
  border-radius: 4px;
  padding: 10px 16px 4px;
  margin: 8px;
  color: ${textColor};
  cursor: pointer;

  :hover {
    background-color: ${contactCardColor};
    color: white;
  }
`;

const ATag = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Contact = () => {
  return (
    <Section>
      <ContactStyled>
        <SectionTitle>
          <SmallHighlight>Let's have a chat!</SmallHighlight>
        </SectionTitle>
        <Paragraph>
          If you want to know more of what I'm up to or just have a quick chat,
          you can reach me here.
        </Paragraph>
        <ContactCardBox>
          <ATag href={'https://twitter.com/tonyioi'}>
            <ContactCards>
              <Twitter size={32} />
            </ContactCards>
          </ATag>
          <ATag href={'https://t.me/apotdevin'}>
            <ContactCards>
              <Send size={32} />
            </ContactCards>
          </ATag>
          <ATag href={'https://github.com/apotdevin'}>
            <ContactCards>
              <GitHub size={32} />
            </ContactCards>
          </ATag>
        </ContactCardBox>
      </ContactStyled>
    </Section>
  );
};
