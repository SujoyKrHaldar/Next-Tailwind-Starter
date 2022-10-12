import Head from "next/head";
import Landing from "../components/about/Landing";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="About page" />
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </>
  );
}
