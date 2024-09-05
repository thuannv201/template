import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import RouterRoot from "./routers/RouterRoot";

function App() {
  return (
    <AuthProvider>
      <RouterRoot/>
    </AuthProvider>
  );
}

export default App;
