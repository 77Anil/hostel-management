import { Button, Typography } from "@mui/material";
import { increment } from "../../feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";
import Split from "../../components/split";

function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleCount = () => {
    dispatch(increment());
  };

  return (
    <main>
      <Typography variant="h4" fontWeight="bold">
        Welcome to React with sourav
      </Typography>

      <Typography>{`Count:${count}`}</Typography>
      <Button variant="contained" onClick={handleCount}>
        Count
      </Button>
      <Split>
        <div>
          <h2>Sourav</h2>
        </div>
        <div>
          <h2>Gourav</h2>
        </div>
      </Split>
    </main>
  );
}

export default Home;
