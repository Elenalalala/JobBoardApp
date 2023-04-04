import "./App.css";
import Home from "./Home";
import store from "./Data/storeConfig";
import { Provider } from "react-redux";
import { saveState } from "./localStorage";

store.subscribe(() => {
  saveState({
    savedJobs: store.getState().jobCollection.inList,
  });
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
