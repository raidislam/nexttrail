import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();

  return {
    props: {
      json,
    },
  };
};

const index = ({ json }) => {
  console.log(json);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h2>Hello </h2>
      {json.slice(0, 6).map((res) => {
        return (
          <div key={res.id} className="bg-color color area">
            <h5>User Id : {res.id}</h5>
            <h2>Name : {res.name}</h2>
            <Link href={`/users/${res.id}`}>
              <a>
                <h2>Emal : {res.email}</h2>
              </a>
            </Link>
          </div>
        );
      })}

      <style jsx>
        {`
          .bg-color {
            background-color: #ddd;
          }
          .color {
            color: blue;
          }
          .area {
            width: 500px;
            padding: 15px;
            margin: 10px;
            box-shadow: 0 10px 8px 6px #eee;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

export default index;
