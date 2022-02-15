import { Routes, Route, Link } from "react-router-dom";
import Animals from "./components/Animals";
import Populations from "./components/Populations";

const AppRouter = () => {
  return (
    <>
      <nav style={{textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/animals">Animals Component</Link>
        <Link to="/populations">Populations Component</Link>

      </nav>
      <Routes>
        <Route path="/animals" element={<Animals />} />
        <Route path="/populations" element={<Populations />} />

      </Routes>
    </>
  );
};

export default AppRouter;
