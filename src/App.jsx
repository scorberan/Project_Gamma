import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Outlet />
      <footer className="read-the-docs"></footer>
    </>
  );
}
export default App;
