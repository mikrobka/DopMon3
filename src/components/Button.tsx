import React from 'react';
type ButtonType = {
    callback:(title:string)=>void
    title:string
}



const Button: React.FC<ButtonType> = ({callback,title}) => {
   const onClickHandler = () => {
       callback(title)
    }
    return (
        <div>
            <button onClick={onClickHandler}>{title}</button>
        </div>
    );
};

export default Button;