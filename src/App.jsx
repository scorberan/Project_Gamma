import { Outlet } from "react-router-dom";

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
