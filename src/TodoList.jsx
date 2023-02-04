import   React, { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () =>{   
    const [inputList, setInputList] = useState("");
    const [Items, setItems] =useState([]);
    
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () =>{
        setItems((oldItems) => {
            return [...oldItems, inputList];

        });
        setInputList("");
    };

    const deleteItems = (id) =>{
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) =>{
                return index !== id;
            } )
        })

    };

    return(
        <>
            <div className="main_div">
                <div className="center_div"><br/>
                <h1 className="headingToDo"> To do List </h1>
                <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
                <button className="AddItemBtn" onClick={listOfItems}> + </button>

                <ol>
                    {Items.map( (itemval, index) => {
                        console.log("");  
                      return  <ToDo key={index} id={index} text={itemval} onSelect={deleteItems}/>;                  
                         } )}
                </ol> 
                </div>
            </div>
        </>)}
export default ToDoList;