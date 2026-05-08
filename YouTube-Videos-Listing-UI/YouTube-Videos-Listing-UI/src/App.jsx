import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  async function fetchVideos() {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/related/eLyISYdoVac?page=1&limit=5"
      );

      const data = await res.json();

      setVideos(data?.data?.data || []);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="app">
      <h1>YouTube Video Listing</h1>

      <div className="grid">
        {videos.map((video) => {
          const v = video.items;

          return (
            <div key={v.id} className="card">
              <img
                src={v.snippet.thumbnails.medium.url}
                alt={v.snippet.title}
              />

              <div className="content">
                <h3>{v.snippet.title}</h3>

                <p className="channel">{v.snippet.channelTitle}</p>

                <p className="meta">
                  {new Date(v.snippet.publishedAt).toDateString()} •{" "}
                  {Number(v.statistics.viewCount).toLocaleString()} views
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;