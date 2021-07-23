import "./App.css";
import PrimarySearchAppBar from "./Nav";
import CourseCard from "./CourseCard";
import Hero from "./Hero";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Hero />
      <CourseCard />
    </div>
  );
}

export default App;
