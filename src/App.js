import { Outlet, Link } from "react-router-dom";
import './styles.scss';

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
