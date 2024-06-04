import { ExtraInfo as TExtraInfo } from "../api/extraInfo/ExtraInfo";

export const EXTRAINFO_TITLE_FIELD = "key";

export const ExtraInfoTitle = (record: TExtraInfo): string => {
  return record.key?.toString() || String(record.id);
};
