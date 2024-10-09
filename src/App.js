import Home from "./components/home/Home";
import "./index.css";
import { SidebarProvider } from "./components/context/drawerContext";
import Login from "./components/login/login";

function App() {
  return (
    <SidebarProvider>
      <Home />
    </SidebarProvider>
  );
}

export default App;
