import Head from "next/head";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Node Update Homepage</title>
        <meta
          name="description"
          content={`A statically generated blog example using Next.js and.`}
        />
      </Head>
      <h2>home</h2>
    </Layout>
  );
};

export default Home;
