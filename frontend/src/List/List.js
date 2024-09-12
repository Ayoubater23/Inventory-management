import React from 'react'
import trash from "../images/trash.png";



const List = (props) => {
    console.log(props.items)
    const [visibility, setVisibility] = React.useState(true)
    const toggleVisibility = ()=> {
        setVisibility(prevState => !prevState)
        console.log(visibility)
    }

    return (
        <div className="list">
            <div className="list-title">
                <h1>Inventaire d'atelier</h1>
            </div>
            <div className="list-stock">
                <h2>Articles en stock </h2>
                <h2>{props.items.length}</h2>
            </div>
            <div>
                <button className="list-add-btn" onClick={props.togglePlusVisibilty}>Ajouter</button>
            </div>
            {visibility &&
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Dimension</th>
                            <th>Prix</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dimension}</td>
                                <td>{item.price}</td>
                                <td>{item.date}</td>
                                <td>
                                    <button
                                        onClick={() => props.deleteItem(item.id)}
                                        className="trash-icon-btn">
                                        <img
                                            className="trash-icon"
                                            src={trash}
                                            alt="trash"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
export default List
