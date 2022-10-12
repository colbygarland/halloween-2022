import Head from 'next/head';
import { PAGE_DESCRIPTION, PAGE_TITLE } from '../strings';

interface PageHeadProps {
  title?: string;
  description?: string;
}

export const PageHead = ({ title = PAGE_TITLE, description = PAGE_DESCRIPTION }: PageHeadProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="https://trick-or-treat-2022.netlify.app/social.png" />
      </Head>
    </>
  );
};
