import { forwardRef } from "react";

export const Input = forwardRef(({ children, error, ...rest }, ref) => {
    return (
        <>
            <input className="input register" ref={ref} {...rest} />
            {children}
            {error ? <p>{error.message}</p> : null}
        </>
    )
})