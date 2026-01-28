import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

const CatalogApp = lazy(() => import("catalog_remote/App"));

function Home() {
    return (
        <section>
            <h1>Home</h1>
            <p>Welcome to the home page.</p>
        </section>
    );
}

function About() {
    return (
        <section>
            <h1>About</h1>
            <p>This is a basic React Router setup.</p>
        </section>
    );
}

function NotFound() {
    return (
        <section>
            <h1>404</h1>
            <p>Page not found.</p>
        </section>
    );
}

function Catalog() {
    return (
        <section>
            <h1>Catalog</h1>
            <Suspense fallback={<p>Loading catalog...</p>}>
                <CatalogApp />
            </Suspense>
        </section>
    );
}

export default function App() {
    return (
        <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
            <nav style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/catalog">Catalog</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}
