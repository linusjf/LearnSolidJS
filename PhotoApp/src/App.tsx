import { createSignal, onMount, For, JSXElement } from "solid-js";
import "./styles.css";

interface Photo {
  thumbnailUrl: string;
  title: string;
}

/**
 * @returns {JSXElement} rendition of Photo Album
 */
function App(): JSXElement {
  const [photos, setPhotos] = createSignal<Photo[]>([]);

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );
    setPhotos(await res.json());
  });

  return (
    <>
      <h1>Photo album</h1>
      <div class="photos">
        <For each={photos()} fallback={<p>Loading...</p>}>
          {(photo) => (
            <figure>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </>
  );
}

export default App;
