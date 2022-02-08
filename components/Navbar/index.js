import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../../styles/Navbar.module.css";
import BackButton from "./BackButton";

function Header() {
  const router = useRouter();
  const atHome = router.asPath === "/" ? true : false
  return (
    <div className={styles.navbarContainer}>
      <div className={atHome ? styles.navbarAtHome : styles.navbar}>
        {atHome ? null : <BackButton />}
        <div className={styles.Image}>
          <Image src="/icons/logo.png" alt="logo" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

export default Header;
