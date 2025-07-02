import React from 'react'
interface MyButtonProps {
    title: string,
    disabled: boolean,
}
const Button: React.FC<MyButtonProps> = ({ title, disabled }) => {
    return (
        <button disabled={disabled} className='text-xl bg-slate-500 hover:bg-slate-400 transition-all ease-in-out px-2 py-1 rounded-md mt-2 text-white cursor-pointer'>{title}</button>
    )
}

export default Button