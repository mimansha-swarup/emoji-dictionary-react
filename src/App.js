import React, { useState } from "react";

import "./styles.css";

const db = {
  "☁️": " Cloud",
  "⛅": "Sun Behind Cloud",
  "⛈️": "Cloud with Lightning and Rain",
  "🌤️": "Sun Behind Small Cloud",
  "🌥️": "Sun Behind Large Cloud",
  "🌦️": "Sun Behind Rain Cloud",
  "🌧️": "Cloud with Rain",
  "🌨️": "Cloud with Snow",
  "🌩️": "Cloud with Lightning",
  "🌪️": "Tornado",
  "🌫️": "Fog",
  "🌬️": " Wind Face",
  "🌈": "Rainbow",
  "☂️": "Umbrella",
  "☔": "Umbrella with Rain Drops",
  "⚡": "High Voltage",
  "❄️": " Snowflake",
  "☃️": "Snowman",
  "⛄": "Snowman Without Snow",
  "☄": "Comet",
  "🔥": "Fire",
  "💧": "Drople"
};
var dbKey = Object.keys(db);

export default function App() {
  const [ogText, textSetter] = useState("");

  function textChanger(event) {
    var tempText = event.target.value;

    var displayText = db[tempText];
    if (displayText === undefined) {
      displayText = "We don't have it in our DataBase";
    }
    textSetter(displayText);
  }

  function textClicker(emoji) {
    var clickText = db[emoji];
    textSetter(clickText);
  }

  return (
    <div className="App">
      <h1 id="heding">WeathoMoji</h1>

      <p id="notATagLine" style={{ fontSize: "1.5rem" }}>
        Looking for Weather's Emoji?
      </p>
      <input onChange={textChanger}></input>
      <h3 id="outputText">{ogText}</h3>
      <div id="emojiCOntainer">
        {dbKey.map((emoji) => (
          <p key={emoji} onClick={() => textClicker(emoji)} id="emojiDisplayer">
            {emoji}
          </p>
        ))}
      </div>
    </div>
  );
}
