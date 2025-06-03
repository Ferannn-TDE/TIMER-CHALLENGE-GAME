import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState();

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  const playerName = useRef();

  return (
    <section id="player">
      <h2>Welcome {name ?? "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
