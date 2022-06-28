import { useState } from 'react';

export function Test() {
    const [show, setShow] = useState(false);

    const clickHandler = () => {
        console.log('clicked');
        setShow(!show);
    }

    const element = !show ? <button onClick={clickHandler}>Test</button> : <div><button onClick={clickHandler}>Test</button><div>ELOELOELO</div></div>

    return (
        element
    )
}