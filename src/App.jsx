import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Loading } from "./pages";

function App() {
  return (
    <RouterProvider router={router}  fallbackElement={<Loading/>} />
  )
}

export default App