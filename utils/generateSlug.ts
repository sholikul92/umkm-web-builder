export const generateSlug = (text: string): string => {
  const arrSlugs = text.split(" ");
  const slug = arrSlugs.join("").toLowerCase();

  return slug;
};
