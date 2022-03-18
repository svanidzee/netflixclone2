// import { useState } from "react";
// import Image from "next/image";

// import { motion } from "framer-motion";
// import cls from "classnames";

// import styles from "./card.module.css";

// const card = (props) => {
//   const {
//     imgUrl = "https://images.unsplash.com/photo-1615413250263-bb04cc0a3988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpeGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
//     size = "medium",
//     id,
//   } = props;

//   const [src, setSrc] = useState(imgUrl);

//   const classMap = {
//     large: styles.lgItem,
//     medium: styles.mdItem,
//     small: styles.smItem,
//   };

//   const handleOnError = () => {
//     console.log("error");
//     setSrc(
//       "https://images.unsplash.com/photo-1615413250263-bb04cc0a3988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpeGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//     );
//   };

//   const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

//   return (
//     <div className={styles.container}>
//       <motion.div
//         className={cls(styles.imgMotionWrapper, classMap[size])}
//         whileHover={{ ...scale }}
//       >
//         <Image
//           src={src}
//           alt="Card"
//           layout="fill"
//           className={styles.cardImg}
//           onError={handleOnError}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default card;

import { useState } from "react";
import Image from "next/image";

import cls from "classnames";

import { motion } from "framer-motion";

import styles from "./card.module.css";

const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",

    size = "medium",

    id,
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  // set image path if we have wrong default image props
  const handleOnError = () => {
    console.log("error");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
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
          src={imgSrc}
          alt="Card image"
          layout="fill"
          className={styles.cardImg}
          // error event handler
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;
