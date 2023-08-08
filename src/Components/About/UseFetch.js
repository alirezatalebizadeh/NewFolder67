import React, { useEffect, useState } from 'react'

export default function UseFetch(url) {
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(`${url}`)
                .then(res => res.json())
                .then(data => {
                    console.table(data)
                    setPosts(data)
                    setIsPending(false)
                })
                .catch(err => {
                    setError(err)
                })
        }, 2000);
    }, [])



    return [error, posts, isPending]
}
