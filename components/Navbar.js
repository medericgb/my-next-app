import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <div className="logo">
        <h2>Je suis la Navbar</h2>
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
