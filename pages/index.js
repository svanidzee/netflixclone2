import Head from "next/head";

import Navbar from "../components/navbr/navbar";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-card";

import styles from "../styles/Home.module.css";

import { getVideos } from "../lib/videos";

//
export async function getServerSideProps() {
  //
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  // const popularVideos = await getVideos("disney trailer");

  return { props: { disneyVideos, travelVideos, productivityVideos } };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
}) {
  console.log(disneyVideos);
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username="svanidzeee@gmail.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        {/*  */}
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={disneyVideos} size="small" />
      </div>
    </div>
  );
}
