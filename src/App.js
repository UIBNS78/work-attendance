// import "./App.css";
import Login from "./pages/auth/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/nav-bar";
import PageNotFound from "./pages/not-found";
import Signup from "./pages/auth/signup";
import Chat from "./pages/chat";
import Message from "./components/chat/message";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index path="login" element={<Login title="Login page" />} />
      <Route path="signup" element={<Signup title="Signup page" />} />
      <Route path="chat" element={<Chat />}>
        <Route path=":id" element={<Message />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
