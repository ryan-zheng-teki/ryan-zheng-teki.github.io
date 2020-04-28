
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export const MarkdownDisplayer: React.SFC<{}>= () => {
  return (
    <>
      { ReactHtmlParser('hello') }
    </>
  );
};