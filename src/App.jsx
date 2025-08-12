import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const playImage = document.getElementById("play-image");
    const bgMusic = document.getElementById("bg-music");

    if (playImage && bgMusic) {
      playImage.addEventListener("click", () => {
        bgMusic.play();
      });
    }
  }, []);

  return (
    <div className="bg-lucu">
      <div className="container">
        <div className="profile-wrapper">
          <div className="profile-text">
            <h1>Lovely's Boyfriend 𐙚⋆.˚</h1>

            <div className="profile-opening">
              <p>Just a tiny peek into my bf!</p>
            </div>

            <audio id="bg-music" loop>
              <source src="/song.mp3" type="audio/mpeg" />
            </audio>

            <p>
              <strong>Name:</strong> Andrew Garfield
            </p>
            <p>
              <strong>Short Version:</strong> Andrew
            </p>
            <p>
              <strong>Currently Surviving In:</strong> My heart
            </p>
            <p>
              <strong>My Spawn Date:</strong> 20 August 1983
            </p>

            <p>
              <strong>Certified lovely Things:</strong>
            </p>
            <ul>
              <li>His eyes when he smiles</li>
              <li>That effortless style</li>
              <li>The way he listens with full attention</li>
              <li>Random candid pose that somehow always looks good</li>
            </ul>

            <p>
              <strong>The "Oh NoOooOo" Section:</strong>
            </p>
            <ul>
              <li>Forgetting to bring me to the red carpet</li>
            </ul>

            <div className="profile-motto">
              <p>
                "Proof that charm, talent, and kindness can all exist in one
                person."
              </p>
            </div>

            <a
              className="instagram-btn"
              href="https://www.instagram.com/queenssly_?igsh=OTN6Zm1kaG1iYzU0"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram Andrew Garfield's
              Gf
            </a>
          </div>

          <div className="profile-photo">
            <img
              src="/andr.jpeg"
              alt="Foto Pacar Lovely"
              className="straw-cursor"
              id="play-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
