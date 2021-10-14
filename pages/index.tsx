import counterState from "../store/atoms/counter";
import multiplier from "../store/selector/counter_selector";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Home() {
  const [count, setCount] = useRecoilState(counterState);
  const multiplierCount = useRecoilValue(multiplier);

  return (
    <div>
      <header>Header Here</header>
      <body>
        <h1 className="font-bold text-blue-300">Counter</h1>
        <h1 className="text-500 font-bold text-red-500">VALUE: {count}</h1>
        <h1 className="text-500 font-bold text-red-500">
          VALUE x 5: {multiplierCount}
        </h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </body>
      <footer>Footer Here</footer>
    </div>
  );
}
