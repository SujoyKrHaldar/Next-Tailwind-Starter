import Head from "next/head";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next tailwind starter</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </>
  );
}
