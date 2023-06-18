import logo from "./logo.svg";
import "./App.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import Debouncing from "./pages/Debouncing";
import Checkbox from "./pages/Checkbox";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Debouncing/> */}
        <Checkbox />
      </div>
    </Provider>
  );
}

export default App;
