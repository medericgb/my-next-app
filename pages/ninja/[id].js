function SingleNinja({ ninja }) {
  return (
    <div>
      <h2>Single Ninja Detail</h2>
      <h2>{ninja.name}</h2>
      <h3>{ninja.email}</h3>
      <h3>{ninja.website}</h3>
      <h3>{ninja.address.city}</h3>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id;
  let url = "https://jsonplaceholder.typicode.com/users/" + id;
  const res = await fetch(url);
  const ninja = await res.json();

  return {
    props: {
      ninja,
    },
  };
}

export async function getStaticPaths() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const data = await res.json();

  const paths = data.map((el) => {
    return {
      params: { id: el.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default SingleNinja;
