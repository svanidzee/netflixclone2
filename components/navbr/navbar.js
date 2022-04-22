import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { magic } from "../../lib/magic-client";
import styles from "./navbar.module.css";

const navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState();

  const router = useRouter();

  useEffect(async () => {
    try {
      const { email } = await magic.user.getMetadata();
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
