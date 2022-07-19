import ReactDom from 'react-dom/client';
//components and styles
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {
    return (
        <div className='container'>
                <nav className='navbar sticky-top navbar-light bg-nav'>
                    <h1 className='navbar-brand text-dark px-3'>
                    Rick and Morty</h1>

                </nav>
            <List />
        </div>
    );
}

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(<App />)