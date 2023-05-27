import { Outlet } from "react-router-dom";

const Header = () => {
  return <div>Este es mi Header</div>;
};

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </header>
      <Outlet />
      <footer className="read-the-docs">My footer</footer>
    </>
  );
}
export default App;
