import logo from "./logo.svg";
import "./App.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import Debouncing from "./pages/Debouncing";
import Throttling from "./pages/components/Throttling";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Debouncing/> */}
        {/* <Checkbox /> */}
        <Throttling/>
      </div>
    </Provider>
  );
}

export default App;
