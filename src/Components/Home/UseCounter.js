import React, { useState } from 'react'

export default function UseCounter(number) {
    const [count, setCount] = useState(number)

    function addCount() {
        setCount(prevcount => {
            return prevcount + 1
        })
    }
    function minusCount() {
        setCount(prevcount => {
            return prevcount - 1
        })
    }
    return [count, addCount, minusCount]
}
