import { InputFieldsProps } from '@/types'
import React from 'react'

const CustomForm = ({signUpFields}: InputFieldsProps) => {
 console.log('====================================');
 console.log(signUpFields);
 console.log('====================================');
    return (
    <div>
        <form>
        {
            signUpFields.map(el => 
                <div>
                <label>{el.label}</label>
                <input type={el.inputType} />
                </div>
                )
            }
        </form>
    </div>
  )
}

export default CustomForm