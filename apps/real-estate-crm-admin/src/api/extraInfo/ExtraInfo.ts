import { Property } from "../property/Property";

export type ExtraInfo = {
  createdAt: Date;
  id: string;
  key: string | null;
  property?: Property | null;
  updatedAt: Date;
  value: string | null;
};
