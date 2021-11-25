import { useRouter } from "next/dist/client/router";
import React from "react";
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const json = await res.json();

  const paths = json.map((res) => {
    return {
      params: { user: res.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.user;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const singleUser = await res.json();

  return {
    props: {
      singleUser,
    },
  };
};

const user = ({ singleUser }) => {
  return (
    <div>
      <h2>user : {singleUser.name}</h2>
      <h2>Email : {singleUser.email}</h2>
    </div>
  );
};

export default user;
