import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥦": "Broccoli",
  "🥒": "Cucumber",
  "🍑": "Peach",
  "🍌": "Banana",
  "🥑": "Avocado",
  "🍼": "Baby Bottle",
  "🍺": "Beer Mug",
  "🥜": "Peanut",
  "🥝": "Kiwi",
  "🍇": "Grapes"
};
var emojisWeHave = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = " we don't have this in database";
    }
    setMeaning(meaning);
  }
  function emojiClick(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outttttt</h1>

      <input
        placeholder={"search your emojis"}
        style={{ height: "5vh", padding: "0.5rem" }}
        onChange={emojiHandler}
      />

      <h2> {meaning} </h2>
      <h3> Emojis we know </h3>
      {emojisWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            Keys={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
