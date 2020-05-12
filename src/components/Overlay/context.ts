import React from 'react';

export interface InnerOverlayContextInterface {
  title?: string;
  content?: string | React.ReactNode;
  status?: 'success' | 'error';
  data?: any;
}

export enum OverlayType {
  login = 'login',
  modal = 'modal',
  message = 'message',
}

export enum OverlayTheme {
  left = 'left',
  right = 'right',
  modal = 'modal',
}

export type ShowOverlayType = (
  type: OverlayType,
  theme?: OverlayTheme,
  context?: InnerOverlayContextInterface
) => void;

export interface OverlayContextInterface {
  type: OverlayType | null;
  theme: OverlayTheme | null;
  context: InnerOverlayContextInterface;
  show: ShowOverlayType;
  hide(): void;
}

export const OverlayContext = React.createContext<OverlayContextInterface>({
  context: null,
  hide: () => {},
  show: (type) => {},
  theme: null,
  type: null,
});

OverlayContext.displayName = 'OverlayContext';
