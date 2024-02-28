import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {store} from "./stores/store.ts";
import {StoreProvider} from "./utils/store.util.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
)
