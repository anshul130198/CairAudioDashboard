import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
