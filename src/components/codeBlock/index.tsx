import * as React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeBlockProps = {
  value: string;
  language?: string;
};

export const CodeBlock = ({ value, language }: CodeBlockProps) => {
  return (
    <Prism
      style={okaidia}
      language={language}
      showLineNumbers={false}
      children={value}
    />
  );
};
