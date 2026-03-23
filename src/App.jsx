import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Meme } from "./Meme";
import { Shimmer } from "./Shimmer";

// api - https://meme-api.com/gimme/32

function App() {
  const [memes, setMeme] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://meme-api.com/gimme/20");
      const data = await resp.json();
      setMeme((memes) => [
        ...(memes !== null ? memes : []),
        ...(data?.memes || []),
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (
      window.scrollY + window.innerHeight + 10 >=
      document.body.scrollHeight
    ) {
      fetchMemes();
    }
  }, []);

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="px-12 py-6">
      <h3>Hello world</h3>
      <div className="grid grid-cols-3 gap-8 ">
        <>
          {memes?.map((meme, i) => (
            <Meme data={meme} key={i} />
          ))}
        </>
        <>{loading && <Shimmer />}</>
      </div>
    </div>
  );
}

export default App;
