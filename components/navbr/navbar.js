import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { magic } from "../../lib/magic-client";

import styles from "./navbar.module.css";

const navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState();

  const router = useRouter();

  // db tables, and relationships between them:
  // primary keys:
  // A primary key is used to ensure data in the specific column is unique
  // It uniquely identifies a record in the relational database table
  // Only one primary key is allowed in a table
  // It is a combination of UNIQUE and Not Null constraints

  // foreign keys:
  // A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables
  // It refers to the field in a table which is the primary key of another table
  //
  useEffect(async () => {
    try {
      // getMetadata functions: issuer, email, publicAdress
      // issuer - decentralized id of the user. in server side use cases,
      // recomended to use as the user id of your own tables

      // publicAdress - publick key
      const { email, issuer } = await magic.user.getMetadata();
      const didToken = await magic.user.getIdToken();
      // magic.user.getIdToken - encoded string representation of a json
      console.log({ didToken });
      if (email) {
        setUsername(email);
      }
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const handleSignout = async (e) => {
    e.preventDefault();

    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn());
      router.push("/login");
    } catch (error) {
      console.log({ error });
      router.push("/login");
    }
  };

  const handleOnClickHome = useCallback((e) => {
    e.preventDefault();
    router.push("/");
  }, []);

  const handleOnClickMyList = useCallback((e) => {
    e.preventDefault();
    router.push("/my-list");
  }, []);

  // const handleShopDropdown = (e) => {
  //   e.preventDefault();
  //   setShowDropdown((prev) => !prev);
  // };

  const handleShopDropdown = useCallback((e) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src={"/static/netflix.svg"}
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </div>
        </a>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShopDropdown}>
              <p className={styles.username}>{username}</p>

              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
