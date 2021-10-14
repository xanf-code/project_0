import { selector } from "recoil";
import countState from "../atoms/counter";

const multiplier = selector({
  key: "count-multiplier",
  get: ({ get }) => {
    const count = get(countState);
    return count * 5;
  },
});

export default multiplier;
