import { useState } from "react";
import axios from "axios";

const Form = () => {
  const User = "66f6891c30eeb5cb10077bfe";
  const [title, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      var req = await axios.post("http://localhost:5555/api/addsong", {
        User: "66f6891c30eeb5cb10077bfe",
        title: title,
        artist: artist,
        album: album,
        genre: genre,
        releaseDate: releaseDate,
        duration: duration,
        coverImages: coverImage,
      });

      alert("success");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        {/* <input type="text" value={User} /> */}
        <input
          type="text"
          value={title}
          onChange={(e) => setSongTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="artist"
        />
        <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          placeholder="album"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="genre"
        />
        <input
          type="text"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          placeholder="releaseDate"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="duration"
        />
        <input
          type="file"
          accept="image/*"
          multiple={false}
          // value={coverImage}
          onChange={handleImageChange}
          placeholder="coverImage"
        />
        {coverImage && (
          <img
            src={coverImage}
            alt="Uploaded"
            style={{
              maxWidth: "150px",
              maxHeight: "150px",
            }}
          />
        )}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
