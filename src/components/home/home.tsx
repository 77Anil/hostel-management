import { Button, Typography } from "@mui/material";
import { increment } from "../../feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";

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
    </main>
  );
}

export default Home;
