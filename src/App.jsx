import "./App.css";
import RulesContainer from "./components/RulesContainer";

function App() {
  return (
    <div className="flex flex-col items-center p-5">
      {/* Header Section */}
      <div className="flex items-center gap-4 my-10">
        <img
          src="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS428022.jpg"
          alt="Monk Commerce Logo"
          className="w-16 h-16"
        />
        <p className="text-2xl font-bold">Monk Commerce Assignment</p>
      </div>

      {/* Rules Section */}
      <RulesContainer />

      {/* Footer Section */}
      <footer className="text-sm font-bold text-center w-full mt-10 mb-4">
        Completed by <span className="text-blue-600">Aman Verma</span> with ❤️
      </footer>
    </div>
  );
}

export default App;
