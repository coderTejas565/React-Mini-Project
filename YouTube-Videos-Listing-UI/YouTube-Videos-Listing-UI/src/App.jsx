import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchVideos() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/related/eLyISYdoVac?page=1&limit=5"
      );

      const data = await res.json();

      setVideos(data?.data?.data || []);
    } catch (err) {
      setError("Failed to load videos");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchVideos}>Retry</button>
      </div>
    );
  }

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

                <p className="duration">
                  Duration: {v.contentDetails.duration}
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