import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PcmAudioPlayer } from "minipcmplayer";
import pcm from "minipcmplayer";
import fun2 from "@qftjs/monorepo2";
import { hello } from "test-father-build-ts";

function App() {
  const [count, setCount] = useState(0);
  const test = new PcmAudioPlayer({
    inputCodec: "Int16",
    channels: 0,
    sampleRate: 16000,
    flushTime: 10,
    onstatechange: (node, event) => {
      return {};
    },
    onended: (node, event, duration, extraParams) => {
      return {};
    },
  });
  console.log("test-pcm", pcm.pcmPlayer, hello, fun2);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
