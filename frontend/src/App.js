import React, {useEffect, useState} from 'react'
import DashBoard from "./DashBoard/DashBoard";
import NavBar from "./NavBar/NavBar";
import List from "./List/List";
import Plus from "./Plus/Plus";
import axios from "axios";
import { useParams } from 'react-router-dom'

const App = () => {

    let [listVisibility, setListVisibility] = React.useState(false);
    let [plusVisibility, setPlusVisibility] = React.useState(false);
    const [items, setItems] = useState([]);




    const toggleListVisibilty = () => {
        setListVisibility((prevComponent) => !prevComponent )
        setPlusVisibility(false);
    }
    const togglePlusVisibilty = () => {
        setPlusVisibility((prevComponent) => !prevComponent);
        setListVisibility(false);

    }
    useEffect(() => {
        loadItems()

    },[])

    const loadItems = async () => {
        const result=await axios.get("http://localhost:8000/api")
        setItems(result.data)
    }
    const addItem = async (newItem) => {
            const result = await axios.post("http://localhost:8000/api" ,newItem)
            setItems(prevState => [...prevState, result.data]);
            await loadItems()
    }

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:8000/api/${id}`);
        await loadItems()
    }
    return (
        <div className="app">
            <div className="container">
                <DashBoard toggleListVisibilty={toggleListVisibilty}/>
                <NavBar/>

            </div>
            <div>{listVisibility && <List togglePlusVisibilty={togglePlusVisibilty}
                                          items={items}
                                          deleteItem={deleteItem}
            />}</div>
            <div>{plusVisibility && <Plus onAddItem={addItem}
                                          togglePlusVisibilty={togglePlusVisibilty}
                                                                      />}
            </div>
        </div>

    )
}

export default App
