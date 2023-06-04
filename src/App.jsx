import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return <div>Este es mi Header</div>;
};

function App() {
  return (
    <>
      <header>
        <Link to="/"></Link>
        <Link to="/projects"></Link>
      </header>
      <Outlet />
      <footer className="read-the-docs"></footer>
    </>
  );
}
export default App;
