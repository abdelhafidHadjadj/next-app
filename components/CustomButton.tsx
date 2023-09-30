import { CustomButtonProps } from "@/types";

export default function CustomButton({title, containerStyle, btnType,handleClick, disabled}: CustomButtonProps) {
    return(
        <button 
        disabled={disabled}
        className={containerStyle} 
        type={btnType}
        onClick={handleClick}
        >
            {title}
        </button>
    )
}