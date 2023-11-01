<<<<<<< HEAD
import { forwardRef } from "react";
=======
import { forwardRef } from "react"
>>>>>>> 4641fb0e6bcfa13654c5edf75fabd23743b45058

export const Input = forwardRef(({ children, error, ...rest }, ref) => {
    return (
        <div >
            <input className="input" ref={ref} {...rest} />
            {children}
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})