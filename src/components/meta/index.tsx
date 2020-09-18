import Head from 'next/head';

const WEBSITE_URL = 'https://apotdevin.com';

type MetaProps = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  //   twitterTitle: string;
  //   twitterDescription: string;
  //   twitterImage: string;
};

export const Meta: React.FC<MetaProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  //   twitterTitle,
  //   twitterDescription,
  //   twitterImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={`${WEBSITE_URL}${ogImage}`} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={`${WEBSITE_URL}${ogImage}`} />
      <meta name="twitter:site" content="@tonyioi" />
      <meta name="twitter:creator" content="@tonyioi" />
    </Head>
  );
};
