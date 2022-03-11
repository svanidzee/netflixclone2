import { useState } from "react";
import Image from "next/image";

import styles from "./card.module.css";

const card = (props) => {
  // const [src, setSrc] = useState("/static/cliffo.webp");

  const { imgUrl = "/static/cliffo.webp", size = "medium" } = props;

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("error");
  };

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgUrl}
          alt="Card"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </div>
    </div>
  );
};

export default card;
