import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import UseFetch from "./UseFetch";
import UseLocalStorage from "./UseLocalStorage";

export default function About() {

  const [error, posts, isPending] = UseFetch('https://jsonplaceholder.typicode.com/posts')

  const [value, setValue] = UseLocalStorage('dark-mode', '')

  return (
    <div>
      <h1>About page</h1>
      <input type='text' value={value} onChange={e=> setValue(e.target.value)} />
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
