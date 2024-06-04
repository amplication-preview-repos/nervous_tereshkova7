import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
