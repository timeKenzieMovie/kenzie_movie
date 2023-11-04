import { forwardRef } from "react";

export const Input = forwardRef(({ error, ...rest }, ref) => {
    
    return (
        <>
            <input className="input register" ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </>
    )
})