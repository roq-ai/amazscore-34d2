import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface RenamedpackageInterface {
  id?: string;
  name: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  _count?: {};
}

export interface RenamedpackageGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  startup_id?: string;
}
