import { useRouter } from "next/router";
import Modal from "react-modal";

import clsx from "classnames";

import styles from "../../styles/Video.module.css";
import { getYoutubeVideoById } from "../../lib/videos";
import Navbar from "../../components/navbr/navbar";

// modal
// its important for users of screenreaders that other page content be hidden
// via aria-hidden atr while the modal is open
// to allow react modal to do this call Modal.setAppElement("#roor")
Modal.setAppElement("#__next");

export async function getStaticProps(context) {
  // const video = {
  //   title: "Hi cute dog",
  //   publishTime: "2022-03-22",
  //   description: "A big red dog that is super cute",
  //   channelTitle: "Paramount Pictures",
  //   viewCount: 10000,
  // };
  console.log({ context });

  const videoId = context.params.videoId;
  const videoArray = await getYoutubeVideoById(videoId);

  return {
    props: {
      video: videoArray.length > 0 ? videoArray[0] : {},
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];

  const paths = listOfVideos.map((videoId) => ({
    params: { videoId }, // params value must mutch dynamic page name
  }));

  return { paths, fallback: "blocking" };
}

const VideoId = ({ video }) => {
  const router = useRouter();

  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = video;

  return (
    <div className={styles.container}>
      <Navbar />
      <Modal
        isOpen={true} // defines if the modal shown or not
        // onAfterOpen={afterOpenModal} // function that runs after modal opened
        contentLabel="waych the video"
        onRequestClose={() => router.back()} // func that runs after modal closed
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameborder="0"
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoId;

// 1.false : new paths will result in a 404 page

// 2.true : new path will be statically generated (getStaticProps is called) -
// loading state is shown while generating page(via router.isFallback and showing fallback page)
// - page is rendered with required props after generating - new path will be cached in CDN
// (later requests will result in cached page) - crawler Bots may index fallback page (not good for Seo)

// 3."blocking" : new path will be waiting for HTML to be generated (via SSR ) - there will be no loading state
// (no fallback page) - new path will be cached in CDN (later requests will result in cached page)

// after Next.js 12 the fallback:true in ISR technique wont be showing fallback page to crawler Bots
