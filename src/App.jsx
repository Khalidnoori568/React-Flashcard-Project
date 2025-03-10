import Flashcard from "./components/Flashcard";
import Waves from "../src/components/Waves";

function App() {
  return (
    <section>

<Waves
  lineColor="#fff"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
    <div className="App">
      <Flashcard front="Click Me." back="Welcome to iClasser Academy" />
    </div>
    </section>
  );
}

export default App;
