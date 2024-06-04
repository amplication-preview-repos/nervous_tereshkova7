import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";
import { JsonValue } from "type-fest";

export type User = {
  agent?: Agent | null;
  agents?: Array<Agent>;
  client?: Client | null;
  clients?: Array<Client>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
