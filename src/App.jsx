import { RouterProvider } from "react-router-dom";
import { router } from "./routers/root";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
