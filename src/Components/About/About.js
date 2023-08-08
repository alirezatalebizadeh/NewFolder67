import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import UseFetch from "./UseFetch";

export default function About() {

  const [error, posts, isPending] = UseFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <h1>About page</h1>
      <hr />
      {<Outlet />}
      {isPending && <h1>loading ...///</h1>}
      {posts && posts.map(post => (
        <>
          <hr />
          <h5>{post.title}</h5>
        </>

      ))}
      {error && <div>{error}</div>}
    </div>
  );
}
 