import React from 'react';
import { getMiddleContentHeight } from '../../core/tsUtils';
import './scss/index.scss';

const Loader: React.FC<{ full?: boolean }> = ({ full }) => {
  return (
    <div
      className="loader"
      style={full && { height: getMiddleContentHeight() }}
    >
      <div className="loader__items">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Loader;
