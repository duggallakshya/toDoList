import React, { useState } from 'react';
import ListItem from './ListItem';

const App = () => {

    const [item, setItem] = useState("");
    const [itemArray, setItemArray] = useState([]);

    const changeItem = (e) => {
        setItem(e.target.value);
    }

    const addItem = () => {
        if(item === ''){
            alert("Please enter a task");
            return;
        }
        setItemArray((prev) => {
            return [...prev,item]
        });
        setItem("");
    }

    // const handleKeypress = () => {
    //     console.log("clicked");
    //     addItem();
    //   };

    const deleteItem = (id) => {
        setItemArray((prev) => {
            return prev.filter((itemVal,index) => {
                return index!==id;
            });
        })
    }
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1> To Do List</h1>
                    <br />
                    <input type="text" placeholder="Add an item" onChange={changeItem} value={item}/>
                    <button onClick={addItem}> + </button>

                    <ol>
                        {itemArray.map( (item, index) => {
                           return <ListItem key = {index} 
                           id = {index} 
                           itemVal = {item} 
                           onSelect={deleteItem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;