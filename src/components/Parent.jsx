import { observer } from "mobx-react-lite";
import Counter from "./Counter";
import counter from "../store/counter";

const Parent = observer(() => {
    console.log("RENDER: called if uncomment counter usage")
  return (
    <div>
        {/* PARENT: {counter.count}<br /> */}
        <Counter counter={counter}/>
    </div>
  );
})

export default Parent;
