import { Provider } from "react-redux";
import Home from "../components/home";
import { store } from "../feature/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1>Sourav</h1>
      <Home />
    </Provider>
  );
}

export default App;
