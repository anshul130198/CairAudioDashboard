import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import store from "./store/store";
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <div className="wrapper">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
