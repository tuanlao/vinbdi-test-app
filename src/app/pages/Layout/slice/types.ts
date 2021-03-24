/* --- STATE --- */
import { ActionStatus } from 'types';

export interface LayoutState {
  readonly actionStatus?: ActionStatus;
  readonly favouriteIds: string[];
  readonly favouriteIdMap: {
    [key: string]: boolean;
  };
}
