import './Input.css'
export const Input = ({id,name,label,placeholder,type,...props})=>{

    return(
        <fieldset className="input__container">
            <label className='input__label' htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} {...props}/>
        </fieldset>
    )
}