import { CustomButtonProps } from "@/types";

export default function CustomButton({title, containerStyle, handleClick, disabled, btnType = "submit"}: CustomButtonProps) {
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