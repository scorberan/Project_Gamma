import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Landing from "./views/landing/Landing.jsx";
import ProjectAlpha from "./views/project-alpha/ProjectAlpha.jsx";
import ProjectBeta from "./views/project-beta/ProjectBeta.jsx";
import Projects from "./views/projects/Projects.jsx";
// import ProjectDetails from "./views/project-details/ProjectDetails.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <Landing /> },

      { path: "projects", element: <Projects /> },
      { path: "aboutme", element: <ProjectAlpha /> },
      { path: "resoluta", element: <ProjectBeta /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
