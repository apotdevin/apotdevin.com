import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const BitcoinRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const BitcoinButton = styled.div`
  padding: 8px 16px;
  background-color: #ffd300;
  color: black;
  border-radius: 32px;
  font-weight: 500;
`;

export const Bitcoin = () => {
  const fetchPrice = () => {
    return fetch('https://blockchain.info/ticker').then(r => r.json());
  };

  const { data, status } = useQuery('fetchPrice', fetchPrice);

  if (status === 'loading') {
    return (
      <BitcoinRow>
        <BitcoinButton>{'Bitcoin'}</BitcoinButton>
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
        <BitcoinButton>{`Bitcoin: €${price}`}</BitcoinButton>
      </BitcoinRow>
    );
  }

  return null;
};
