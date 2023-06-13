import React from 'react'
import { useStore } from "store";
const CheckList = () => {
    const { movies, addMovie } = useStore();
    return (
        <>
            <h1>Local Web - {movies.length}</h1>
        </>

    )
}

export default CheckList