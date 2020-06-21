import { Section } from '../section';
import { Separation } from '../separation';
import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';
import { Instagram, GitHub, Twitter } from 'react-feather';
import { StyledLink } from '../link';

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 140px;
  height: 140px;

  @media (${mediaWidths.mobile}) {
    width: 120px;
    height: 120px;
    margin-bottom: 24px;
  }
`;

const BlogFooter = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media (${mediaWidths.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  }
`;

const StyledSeparation = styled(Separation)`
  margin: 48px 0;

  @media (${mediaWidths.mobile}) {
    margin: 24px 0;
  }
`;

const BlogFooterSide = styled.div`
  margin-left: 32px;
  width: 100%;

  @media (${mediaWidths.mobile}) {
    margin-left: 0;
  }
`;

const FooterTitle = styled.div`
  font-weight: 800;
  font-size: 18px;
`;

const SingleLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FollowLine = styled(SingleLine)`
  margin-bottom: 8px;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`;

export const BlogContact = () => {
  return (
    <Section sectionWidth={'600px'}>
      <StyledSeparation />
      <BlogFooter>
        <ProfilePicture
          alt={'Profile Picture'}
          src={'/assets/home/Profile.png'}
        />
        <BlogFooterSide>
          <SingleLine>
            <FooterTitle>Anthony Potdevin</FooterTitle>
            <div>Frontend Dev</div>
          </SingleLine>
          <StyledLink href={'https://www.instagram.com/apotdevin/'}>
            <FollowLine>
              Follow me on Instagram
              <Instagram />
            </FollowLine>
          </StyledLink>
          <StyledLink href={'https://github.com/apotdevin'}>
            <FollowLine>
              Check out more on Github
              <GitHub />
            </FollowLine>
          </StyledLink>
          <StyledLink href={'https://twitter.com/tonyioi'}>
            <FollowLine>
              Keep up with me on Twitter
              <Twitter />
            </FollowLine>
          </StyledLink>
        </BlogFooterSide>
      </BlogFooter>
    </Section>
  );
};
