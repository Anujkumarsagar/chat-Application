import React, { useId } from 'react'
//  using refrence useref to take state from other components
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {/* agar label diya hai to label component display hoga  */}
            {
                label && <label
                    className='block text-sm font-medium text-gray-700'
                    htmlFor={id}>{label}
                </label>
            }

            <input type={type}
            className={`${className} `}
            //sending refrence to parent class  varna on change aur programmitcal sytax kaha lgega 
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})
export default Input