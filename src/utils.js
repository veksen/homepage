// @flow

export const slugify = (string: string) => {
  return string.replace(" ", "").toLowerCase();
};
