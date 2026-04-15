import { createClient, MicroCMSImage, MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk';

export type Category = {
  name: string;
  slug: string;
} & MicroCMSListContent;

export type Tag = {
  name: string;
  slug: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  slug: string;
  description: string;
  thumbnail?: MicroCMSImage;
  content: string;
  category: Category;
  tags?: Tag[];
} & MicroCMSListContent;

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error('MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY must be set');
}

export const client = createClient({ serviceDomain, apiKey });

export const getBlogs = (queries?: MicroCMSQueries) =>
  client.getList<Blog>({ endpoint: 'blogs', queries });

export const getBlogBySlug = async (slug: string) => {
  const res = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: { filters: `slug[equals]${slug}`, limit: 1 },
  });
  return res.contents[0] ?? null;
};

export const getAllBlogs = async () => {
  const all: Blog[] = [];
  const limit = 100;
  let offset = 0;
  while (true) {
    const res = await client.getList<Blog>({
      endpoint: 'blogs',
      queries: { limit, offset, orders: '-publishedAt' },
    });
    all.push(...res.contents);
    if (all.length >= res.totalCount) break;
    offset += limit;
  }
  return all;
};

export const getCategories = () =>
  client.getList<Category>({ endpoint: 'categories', queries: { limit: 100 } });
