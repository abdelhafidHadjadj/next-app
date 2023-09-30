import React from 'react'
import { signUpFormFields } from '@/constants'
import CustomForm from '@/components/CustomForm'
const Connexion = () => {
  
    return (
    <div>
        <h1>Connexion</h1>
        <CustomForm signUpFields={signUpFormFields}/>
    </div>

  )
}

export default Connexion