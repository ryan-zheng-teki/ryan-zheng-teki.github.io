import * as React from 'react';
import Login from '../Login';
import { OverlayContext, OverlayType } from '../Overlay';

const OverlayManager: React.FC = () => (
  <OverlayContext.Consumer>
    {(overlay) => {
      switch (overlay.type) {
        case OverlayType.login:
          return <Login overlay={overlay} />;

        default:
          return null;
      }
    }}
  </OverlayContext.Consumer>
);

export default OverlayManager;
