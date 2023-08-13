import React from 'react';

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className="relative">
            <input onChange={onChange} type={type} value={value} id={id} className="
                block
                rounded-md
                px-6
                pt-2
                pb-1
                mb-5
                w-full
                text-md
                text-white
                bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
            " placeholder={label}></input>
        </div>
    )
}

export default Input;