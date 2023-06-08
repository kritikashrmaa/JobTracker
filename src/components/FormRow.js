import React from 'react'

const FormRow = ({handleChange,labelText,type,name,value}) => {

    
  return (
    <div className="form-row">
    <label htmlFor={name} className='form-label'>
        {labelText || name}
    </label>
    <input id={name} type={type} name={name} value={value} 
      onChange={handleChange} className='form-input'/>
  </div>
  )
}

export default FormRow
