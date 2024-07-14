import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from './App';

const rootRef = document.getElementById('root');

ReactDOM.createRoot(rootRef).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
