import * as React from 'react';
import { useAction, useSetter } from '../hooks';
import { ComponentsState } from '../types';

export interface SetComponentProps<TKey extends keyof ComponentsState> {
  /**
   * The name of the shared component to set.
   */
  name: TKey;
  /**
   * The shared component to define.
   */
  component: ComponentsState[TKey];
}

export function SetComponent<TKey extends keyof ComponentsState>({
  name,
  component,
}: SetComponentProps<TKey>): React.ReactElement {
  const setComponent = useAction('setComponent');
  useSetter(() => component && setComponent(name, component));
  // tslint:disable-next-line:no-null-keyword
  return null;
}
