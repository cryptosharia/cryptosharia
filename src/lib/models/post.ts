export type Post = {
  slug: string;
  category: 'activity' | 'article';
  date: Date;
  tags: string[];
  title: string;
  description: string;
  thumbnailUrl: string;
  content: string;
};
