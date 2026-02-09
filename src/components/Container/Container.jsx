import './index.css';

export default function Container({ children }) {
    return (
        <main className="px-4 sm:px-6 lg:px-8">
            { children }
        </main>
    );
}
