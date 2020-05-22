import * as React from 'react';
import { OverlayContext } from '../Overlay';

const OverlayManager: React.FC = () => (
  <OverlayContext.Consumer>
    {(overlay) => {
      switch (overlay.type) {
        default:
          return null;
      }
    }}
  </OverlayContext.Consumer>
);

export default OverlayManager;
