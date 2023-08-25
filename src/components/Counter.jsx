import { observer } from "mobx-react-lite";
// import counter from "../store/counter";

const Counter = observer(({counter}) => {
  return (
    <div>
        {"Count:" + counter.count}
        <div>
            <button onClick={() => counter.increment()}> Increment </button>
            <button onClick={() => counter.decrement()}> Decrement </button>
        </div>

    </div>
  );
})

export default Counter;
