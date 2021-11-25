import { useRouter } from "next/router";
import React from "react";
const pageNo = () => {
  const router = useRouter();
  const slug = router.query.pageNo;
  return (
    <>
      <h2>Blog content {slug}</h2>
    </>
  );
};

export default pageNo;
