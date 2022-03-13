import { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import cls from "classnames";

import styles from "./card.module.css";

const card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1615413250263-bb04cc0a3988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpeGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    size = "medium",
    id,
  } = props;

  const [src, setSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("error");
    setSrc(
      "https://images.unsplash.com/photo-1615413250263-bb04cc0a3988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpeGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    );
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ ...scale }}
      >
        <Image
          src={src}
          alt="Card"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default card;
