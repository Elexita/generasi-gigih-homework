import Index from "./Pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Index />
      <Toaster position="bottom-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
