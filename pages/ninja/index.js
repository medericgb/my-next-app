import Link from "next/link";
import styles from "../../styles/Ninja.module.css";

function Ninja({ ninjas }) {
  if (!ninjas) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>Ninja</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={"/ninja/" + ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const ninjas = await res.json();

  return {
    props: {
      ninjas,
    },
  };
}

export default Ninja;
