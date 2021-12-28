import { useState } from "react";
import { IoHomeSharp } from 'react-icons/io5';

import { AddCategory } from "./Components/AddCategory";
import { Footer } from "./Components/Footer";
import { GifGrid } from "./Containers/GifGrid";

export const GifExpertApp = () => {
  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  const emptyInput = () => {
    setQuery( q => q = '' );
    localStorage.setItem("query", '');
  }

  return (
    <main>
      <div className="introduce">
        <div className="introduce__group">
          <h1 className="introduce__title">GifExpertApp</h1>
          { !!query && <IoHomeSharp onClick={emptyInput}/> }
        </div>
        <AddCategory setQuery={setQuery} query={query} />
      </div>
      {query !== "" ? (
        <div className="group">
          <GifGrid param={query} />
        </div>
      ) : (
        <div className="empty">
          <p className="empty__text">¿Tiene un gif en mente? ¡Búscalo!</p>
        </div>
      )}
      <Footer/>
    </main>
  );
};
