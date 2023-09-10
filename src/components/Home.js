import React from "react";
import { username, city} from  '../data/user.js'

export default function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
