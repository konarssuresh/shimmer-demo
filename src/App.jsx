import "./App.css";
import { useEffect, useState } from "react";
import { Meme } from "./Meme";
import { Shimmer } from "./Shimmer";

// api - https://meme-api.com/gimme/32

function App() {
  const [memes, setMeme] = useState(null);

  const fetchMemes = async () => {
    const resp = await fetch("https://meme-api.com/gimme/20");
    const data = await resp.json();
    setMeme(data?.memes);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="px-12 py-6">
      <h3>Hello world</h3>
      <div className="grid grid-cols-3 gap-8 ">
        {!memes ? (
          <Shimmer />
        ) : (
          <>
            {memes?.map((meme, i) => (
              <Meme data={meme} key={i} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
