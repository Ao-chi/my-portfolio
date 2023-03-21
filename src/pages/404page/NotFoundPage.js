import React from "react";

import "./notfound.scss";

const NotFoundPage = () => {
    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    You're lost. Let me take you back <a href="/">Home</a>
                </p>
            </div>
        </section>
    );
};

export default NotFoundPage;
