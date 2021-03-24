import { RootState } from './RootState';

interface ActionStatus {
  type: 'success' | 'error';
  message: string;
}

export type { RootState, ActionStatus };
