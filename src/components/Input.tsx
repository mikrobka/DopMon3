import React, {ChangeEvent, useState} from 'react';

type InputType = {
    newTitle:string
    newSetTitle:(newTitle:string)=>void
}



export const Input = (props:InputType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.newSetTitle(e.currentTarget.value)

    }
    return (
        <div>
            <input value={props.newTitle} type="text" onChange={onChangeHandler}/>
        </div>
    );
};

