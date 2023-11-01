import { forwardRef } from "react";


export const Select = forwardRef (({error, children, label, id, ...rest}, ref) => {

    return (
        <div >
            <label className={`headline`} htmlFor={id}>{label}</label>
            <select ref={ref} {...rest} id={id}>{children}</select>
            <span>{error && error.message}</span>
        </div>
    )
})