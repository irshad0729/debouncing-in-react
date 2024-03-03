import logo from "./logo.svg";
import "./App.css";
import store from "./utils/store";
import { Provider } from "react-redux";
import Debouncing from "./pages/Debouncing";
import Throttling from "./pages/components/Throttling";
import PackageTest from "./pages/components/Package";
import StackOverflowFix from "./pages/components/StackOverflowFix";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Debouncing/> */}
        {/* <Checkbox /> */}
        {/* <PackageTest /> */}
        <StackOverflowFix />
      </div>
    </Provider>
  );
}

export default App;
