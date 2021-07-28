import Index from "./Pages";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Index />
        <Toaster position="bottom-center"></Toaster>
      </Provider>
    </div>
  );
}

export default App;
