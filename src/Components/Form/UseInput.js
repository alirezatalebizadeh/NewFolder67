import React, { useState } from 'react'

export default function UseInput(initValue) {


    const [value, setValue] = useState(initValue)

    const resetValue = () => {
        setValue('')
    }


    const binding = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, binding, resetValue]
}
