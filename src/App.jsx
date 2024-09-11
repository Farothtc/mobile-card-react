import { About } from "./components/About.jsx";
import { Photo } from "./components/Photo.jsx";
import { Name } from "./components/Name.jsx";
import { Buttons } from "./components/Buttons.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card border-0 mt-2">
          <Photo />
          <div className="card-body">
            <Name />
            <Buttons />
            <About />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
