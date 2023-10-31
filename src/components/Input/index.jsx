import { forwardRef } from "react"

export const Input = forwardRef(({ children, error, ...rest }, ref) => {
    return (
        <div >
            <input className="input" ref={ref} {...rest} />
            {children}
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})