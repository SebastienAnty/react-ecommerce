import { useEffect, useState } from "react";

    const search = () => (
        <form action="/" method="get">
            <label htmlFor="header-search">
            <span className="visually-hidden"></span>
            </label>
                <input
            type="text"
            id="header-search"
            name="s" 
            />
            <button type="submit">Add</button>
        </form>
);

export default search;

