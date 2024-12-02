import React from "react";
import { Link } from "react-router-dom";

export default function Page() {
    return <>
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-bold text-gray-900">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
                <p className="text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
                <Link to="/" replace className="inline-block px-8 py-2 bg-green text-white rounded-lg hover:brightness-110 transition-colors">
                    Return Home
                </Link>
            </div>
        </section>
    </>;
}
