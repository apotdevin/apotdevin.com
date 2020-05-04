import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { TechCards } from '../../views/home/Tech';
import { mediaWidths } from '../../styles/ThemeColors';

const BitcoinRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  @media (${mediaWidths.mobile}) {
    margin: 0 0 32px;
  }
`;

export const Bitcoin = () => {
  const fetchPrice = () => {
    return fetch('https://blockchain.info/ticker').then(r => r.json());
  };

  const { data, status } = useQuery('fetchPrice', fetchPrice);

  if (status === 'loading') {
    return (
      <BitcoinRow>
        <TechCards href={'https://bitcoin.org/'}>{'Bitcoin'}</TechCards>
      </BitcoinRow>
    );
  }

  if (status === 'error') {
    return null;
  }

  if (data?.EUR?.last) {
    const price = data.EUR.last;
    return (
      <BitcoinRow>
        <TechCards
          href={'https://bitcoin.org/'}
        >{`Bitcoin: €${price}`}</TechCards>
      </BitcoinRow>
    );
  }

  return null;
};
