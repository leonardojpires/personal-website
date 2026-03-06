import './index.css';

export default function Container({ children }) {
    return (
        <main id="main-content" tabIndex="-1">
            { children }
        </main>
    );
}
