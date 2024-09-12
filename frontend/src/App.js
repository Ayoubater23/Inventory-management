import React, {useEffect, useState} from 'react'
import DashBoard from "./DashBoard/DashBoard";
import NavBar from "./NavBar/NavBar";
import List from "./List/List";
import Plus from "./Plus/Plus";
import ste from "./images/logo-ste.png"
import axios from "axios";

const App = () => {

    let [listVisibility, setListVisibility] = React.useState(false);
    let [plusVisibility, setPlusVisibility] = React.useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        loadItems()

    },[])
    const loadItems = async () => {
        const result=await axios.get("http://localhost:8000/api")
        setItems(result.data)
    }



    const toggleListVisibilty = () => {
        setListVisibility((prevComponent) => !prevComponent )
        setPlusVisibility(false);
    }
    const togglePlusVisibilty = () => {
        setPlusVisibility((prevComponent) => !prevComponent);
        setListVisibility(prevState => !prevState);

    }


    const addItem = async (newItem) => {
        await axios.post("http://localhost:8000/api" ,newItem)
        setItems(prevState => [...prevState, newItem]);
        toggleListVisibilty();
    };
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:8000/api/${id}`);
        setItems(items.filter((item) => item.id !== id));
        console.log("hey")
    }
    return (
        <div className="app">
            <div className="container">
                <DashBoard toggleListVisibilty={toggleListVisibilty}/>
                <NavBar/>
                {!listVisibility && <img className="ste" src={ste} alt="Ste"/>}
            </div>
            <div>{listVisibility && <List togglePlusVisibilty={togglePlusVisibilty}
                                          items={items}
                                          deleteItem={deleteItem}
            />}</div>
            <div>{plusVisibility && <Plus onAddItem={addItem} togglePlusVisibilty={togglePlusVisibilty}/>}</div>
        </div>

    )
}

export default App
