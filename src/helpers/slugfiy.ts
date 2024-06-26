import { convert } from "url-slug";

export const slugfiy = (value: string) => {
  return convert(value, {
    dictionary: {
      "'": "",
    },
  });
};
