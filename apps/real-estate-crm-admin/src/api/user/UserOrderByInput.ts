import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
