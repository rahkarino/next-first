import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev News",
  keywords: "programming, dev",
  description: "get the latest news in web dev",
};

export default Meta;
