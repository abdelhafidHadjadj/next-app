import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    disabled: boolean;
    containerStyle: string;
    handleClick: MouseEventHandler<HTMLButtonElement>; 
}

export interface CustomNavBarProps {
    logo: string;
    containerStyle: string;
}
