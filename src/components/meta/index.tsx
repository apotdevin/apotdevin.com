import Head from 'next/head';

const WEBSITE_URL = 'https://apotdevin.com';

type MetaProps = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: string;
  isDraft?: boolean;
  //   twitterTitle: string;
  //   twitterDescription: string;
  //   twitterImage: string;
};

export const Meta: React.FC<MetaProps> = ({
  title = 'Anthony Potdevin',
  description = 'I am Anthony Potdevin, a professional software engineer focused on using the most up-to-date tech stack to bring the most value to projects. I also really like Bitcoin.',
  ogTitle = 'Anthony Potdevin',
  ogDescription = 'I am Anthony Potdevin, a professional software engineer focused on using the most up-to-date tech stack to bring the most value to projects. I also really like Bitcoin.',
  ogImage,
  isDraft,
  //   twitterTitle,
  //   twitterDescription,
  //   twitterImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {isDraft ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={`${WEBSITE_URL}${ogImage}`} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={`${WEBSITE_URL}${ogImage}`} />
      <meta name="twitter:site" content="@tonyioi" />
      <meta name="twitter:creator" content="@tonyioi" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
