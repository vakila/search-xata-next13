// app/search.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// fetch() is not yet supported inside Client Components
// so we wrap it in a utility function
async function getData(term: string) {
  const res = await fetch(`/api/search?term=${term}`);
  return res.json();
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState(""); // Track the search term
  const [games, setGames] = useState([]); // Track the search results

  useEffect(() => {
    if (searchTerm) {
      // Update the games array once data has loaded
      getData(searchTerm).then(results => setGames(results));
    } else {
      // Reset games if the search term has been cleared
      setGames([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {games.map(({ id, name }) => {
        // Render a basic link to the info page for each game
        return (
          <div key={id} style={{ marginTop: "1rem" }}>
            <Link href={`/games/${id}`}>
              <h2>{name}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}
