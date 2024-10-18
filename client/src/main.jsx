import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from './App';

import store from "./app/store.js";
import { Provider } from "react-redux";

const rootRef = document.getElementById('root');

ReactDOM.createRoot(rootRef).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);