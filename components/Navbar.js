import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <div className="logo">
        {/* <img src="/_.png" alt="My logo" height="70" width="100" /> */}
        <Image src="/_.png" height={70} width={100} alt="MyLogo" />
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninja">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
