import { isNotNullOrUndefined } from "src/utils/isNullOrUndefined";

export const isNotEmpty = (value: string | null | undefined): boolean => {
  return isNotNullOrUndefined(value) && value.trim() !== "";
};
