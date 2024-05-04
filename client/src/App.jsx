import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Groups from "./pages/Groups";
import Auth from "./pages/Auth";
// const Home = lazy(() => import("./pages/Home"));
// const Auth = lazy(() => import("./pages/Auth"));
// const Chat = lazy(() => import("./pages/Chat"));
// const Groups = lazy(() => import("./pages/Groups"));
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};
export default App;
