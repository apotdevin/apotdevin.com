import * as React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

type CodeBlockProps = {
  value: string;
  language?: string;
  inline?: boolean;
};

const InlineCode = styled.code`
  background-color: rgb(219, 219, 219);
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const CodeBlock = ({ value, language, inline }: CodeBlockProps) => {
  if (inline) {
    return <InlineCode>{value}</InlineCode>;
  }

  return (
    <Prism
      style={okaidia}
      language={language}
      showLineNumbers={false}
      children={value}
    />
  );
};
