import { RenamedpackageInterface } from 'interfaces/renamedpackage';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  Renamedpackage?: RenamedpackageInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    Renamedpackage?: number;
    product?: number;
  };
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
