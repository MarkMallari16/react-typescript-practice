import React from 'react'
interface MyButtonProps {
    title: string,
    disabled: boolean
}
const Button: React.FC<MyButtonProps> = ({ title, disabled }) => {
    return (
        <button disabled={disabled} >{title}</button>
    )
}

export default Button