import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeBlockProps = {
  value: string;
  language?: string;
};

export const CodeBlock = ({ value, language }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={'javascript'} style={darcula}>
      {value}
    </SyntaxHighlighter>
  );
};
