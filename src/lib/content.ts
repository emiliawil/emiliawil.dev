export const isPublished = ({ data }: { data: { draft?: boolean } }) =>
  import.meta.env.DEV || !data.draft;
