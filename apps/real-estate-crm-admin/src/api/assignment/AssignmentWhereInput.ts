import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentWhereInput = {
  agent?: AgentWhereUniqueInput;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};
