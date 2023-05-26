// import "./App.css";
import Login, { loginLoader } from "./pages/auth/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/nav-bar";
import PageNotFound, { pageNotFoundLoader } from "./pages/not-found";
import Signup, { signupLoader } from "./pages/auth/signup";
import Chat, { charLoader } from "./pages/chat";
import Message from "./components/chat/message";
import Profile, { profileLoader } from "./pages/auth/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route
        index
        path="login"
        element={<Login title="Login page" />}
        loader={loginLoader}
      />
      <Route
        path="signup"
        element={<Signup title="Signup page" />}
        loader={signupLoader}
      />
      <Route path="chat" element={<Chat />} loader={charLoader}>
        <Route path=":id" element={<Message />} />
      </Route>
      <Route
        path="profile"
        element={<Profile title="Profile page" />}
        loader={profileLoader}
      />
      <Route path="*" element={<PageNotFound />} loader={pageNotFoundLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
