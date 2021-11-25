import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

const Error = () => {
  const router = useRouter();
  return (
    <div>
      <h2 style={{ color: "red" }}>this is 404 page , page not found</h2>
      {/* <Link href="/">
        <a>Back to Home</a>
      </Link> */}

      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default Error;
