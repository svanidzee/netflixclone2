// import Card from "./card";

// import styles from "./section-card.module.css";

// const SectionCards = (props) => {
//   const { title, videos = [], size } = props;
//   console.log({ videos });

//   return (
//     <section className={styles.container}>
//       <h2 className={styles.title}>{title}</h2>
//       <div className={styles.cardWrapper}>
//         {/*  */}
//         {videos.map((video, idx) => (
//           <Card id={idx} imgUrl={video.imgUrl} size={size} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SectionCards;

import Card from "../card/card";

import styles from "./section-card.module.css";

const SectionCard = (props) => {
  const { title, videos = [], size } = props;
  console.log({ videos });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return <Card id={idx} imgUrl={video.imgUrl} size={size} />;
        })}
      </div>
    </section>
  );
};

export default SectionCard;
