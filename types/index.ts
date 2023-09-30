import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    disabled: boolean;
    containerStyle: string;
    btnType?: "submit" | "button";
    handleClick?: MouseEventHandler<HTMLButtonElement>; 
}

export interface CustomNavBarProps {
    logo: string;
    containerStyle: string;
}
export interface CustomFooterProps {
    logo: string;
    containerStyle: string;
}

export interface ParamsIdProps {
    params: {
        id: string;
    };
}

export interface InputFieldsProps {
    signUpFields: 
        {
            label: string,
            inputType: string,
        }[]
    
}