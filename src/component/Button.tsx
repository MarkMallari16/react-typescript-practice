import React from 'react'
interface MyButtonProps {
    title: string,
    disabled: boolean
}
const Button = ({ title, disabled }: MyButtonProps) => {
    return (
        <button disabled={disabled}>{title}</button>
    )
}

export default Button