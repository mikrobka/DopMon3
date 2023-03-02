import React, {useEffect, useState} from 'react';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import Button from "./components/Button";
import {Input} from "./components/Input";


type DataType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [data, setData] = useState<DataType[]>([])
    const [newTitle,newSetTitle] = useState('')

    const doFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        doFetch()
    }, [])

    const showContent = () => {
        doFetch()
    }

    const clearContent = () => {
        setData([])
    }
    const addTitle = (newTitle:string) => {
        let newTasks = {userId:1,id:data.length+1,title:newTitle,completed:false}
        setData([newTasks,...data])
        newSetTitle('')

    }

    return (
        <div className="App">
            <Button callback={showContent} title={"Show me"}/>
            <Button callback={clearContent} title={"Clear"}/>
            <div>
                <Input newTitle ={newTitle} newSetTitle={newSetTitle}/>
                <Button callback={() =>addTitle(newTitle)} title={"Add"}/>
            </div>

            <ul>
                {data.map((t) => {
                    return (
                        <li>
                            <span>{t.id}</span>
                            <span>{t.userId}</span>
                            <span>{t.title}</span>
                            <input type="checkbox" checked={t.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
