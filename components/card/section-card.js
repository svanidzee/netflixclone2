import Link from "next/link";

import Card from "../card/card";
import styles from "./section-card.module.css";

const SectionCard = (props) => {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Link href={`/video/${video.id}`}>
              <a>
                <Card id={idx} imgUrl={video.imgUrl} size={size} />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCard;
