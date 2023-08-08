import React, { useEffect, useState } from 'react'

export default function UseUpdateLogger(title) {
    const [value, setValue] = useState(title)

    useEffect(() => {
        console.log(value);
    }, [value])

    return [value, setValue]
}
