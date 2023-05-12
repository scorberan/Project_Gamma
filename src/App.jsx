import { Outlet } from "react-router-dom";

const Header = () => {
  return <div>Este es mi Header</div>;
};

function App() {
  return (
    <>
      <header>My header</header>
      <Outlet />
      <footer className="read-the-docs">My footer</footer>
    </>
  );
}
export default App;
