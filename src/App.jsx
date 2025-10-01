import { useState } from "react";
import { episodeList } from "./data";


export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="description">
          <h2>Episode Descriptions</h2>
          <p className="select">Select an episode to learn more!</p>
        </section>
      );
    }
    
    return (
      <section className="description">
        <h2>Episode {selectedEpisode.id}</h2>
        <p className="title">
          {selectedEpisode.title}
        </p>
        <p className="describe">
          {selectedEpisode.description}
        </p>
        <button>Watch Now</button>
      </section>
    );
  }

  function Episodes() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
                {episode.title}                
              </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header className="head">
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}

