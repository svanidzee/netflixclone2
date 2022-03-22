import Head from "next/head";

import Navbar from "../components/navbr/navbar";
import Banner from "../components/banner/banner";
import SectionCards from "../components/card/section-card";

import styles from "../styles/Home.module.css";

import { getVideos, getPopularVideos } from "../lib/videos";

// export async function getServerSideProps() {
//   const disneyVideos = await getVideos("disney trailer");
//   const productivityVideos = await getVideos("productivity");
//   const travelVideos = await getVideos("travel");
//   // const popularVideos = await getVideos("disney trailer");

//   return { props: { disneyVideos, travelVideos, productivityVideos } };
// }
export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("Productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos("");

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  productivityVideos,
  travelVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Navbar username="svanidzeee@gmail.com" />
        <Banner
          videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
          {/* <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={disneyVideos} size="small" />{" "} */}
        </div>
      </div>
    </div>
  );
}
