import styled from 'styled-components';
import {
  highlightTopColor,
  highlightBottomColor,
} from '../../styles/ThemeColors';

export const Paragraph = styled.div`
  font-size: 18px;
  max-width: 600px;
  line-height: 150%;
  margin-top: 16px;
`;

export const Highlight = styled.span`
  background: linear-gradient(
    to bottom,
    ${highlightTopColor} 0%,
    ${highlightBottomColor} 100%
  );
  background-position: 0 100%;
  background-size: 2px 14px;
  background-repeat: repeat-x;
  padding: 2px 8px;
`;

export const SmallHighlight = styled(Highlight)`
  background-size: 2px 8px;
  padding: 0 6px;
`;

export const SectionTitle = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 16px 0 8px;
  text-align: left;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 16px;
`;
