//React Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./Pages/Home/Home";
import JoinGame from "./Pages/Quiz/join-game/JoinGame";
import Questions from "./Pages/Quiz/questions/Questions";
import Header from "./Components/Header";
import Learning from "./Pages/Learning/Learning";

import "/public/stylesheets/styles.css";
import "/public/stylesheets/inputboxstyle.css";

import { SocketProvider } from "./Contexts/SocketProvider";

//App
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<JoinGame />} />
        <Route path="/game/start" element={<Questions />} />
        <Route path="/learn" element={<Learning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
