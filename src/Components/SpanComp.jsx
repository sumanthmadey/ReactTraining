import React from 'react'
import { useLocation } from 'react-router-dom';

export default function SpanComp() {
    const location = useLocation();
    const age = location.state.age;
    const name = location.state.name;

    return (
        <>
            <div>{name}{age}</div>
            <div>SpanComp</div>
        </>
    )
}


