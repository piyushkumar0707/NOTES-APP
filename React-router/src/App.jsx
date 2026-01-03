import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";
import NoteDetails from "./pages/NoteDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route
            path="/notes/:id"
            element={<NoteDetails notes={notes} />}
/>


        <Route path="/weather" element={<Weather />} />

        {/* 404 Route – MUST be last */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
}

export default App;
