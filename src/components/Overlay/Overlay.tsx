import classNames from 'classnames';
import * as React from 'react';
import { getMiddleContentHeight } from '../../core/tsUtils';
import { OverlayContextInterface } from './context';
import './scss/index.scss';

interface OverlayProps {
  context: OverlayContextInterface;
  className?: string;
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  className,
  context: { type, theme, hide },
}) => (
  <div
    className={classNames('overlay', {
      [`overlay--${type}`]: !!type,
      [className]: !!className,
    })}
    onClick={hide}
    style={{ height: getMiddleContentHeight() }}
  >
    <div className={`overlay__${theme}`} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default Overlay;
