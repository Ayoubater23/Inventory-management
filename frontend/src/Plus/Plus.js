import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Plus = (props) => {

const [item,setItem] = React.useState({
    name: "",
    type: "",
    description: "",
    quantity: "",
    dimension:"",
    price:"",
    date:""
})
     const handleChange = (event) => {
        const {name, value} = event.target
        setItem(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const itemWithId = { ...item, id: uuidv4() };
        props.onAddItem(itemWithId);
        console.log(item);
        alert('Formulaire soumis avec succès !')
        setItem({
            name: "",
            type: "",
            description: "",
            quantity: "",
            dimension:"",
            price:"",
            date:""
        })
    }
    return (
        <div className="plus" >
            <div className="plus-title">
                <h1>Ajouter articles</h1>
            </div>
            <form onSubmit={handleSubmit} className="plus-container">
                <div>
                    <div className="plus-item-name">
                        <label>Nom d'article *</label>
                        <input className="input-name"
                               type="text"
                               placeholder="Veuillez entrer le nom d'article"
                               onChange={handleChange}
                               value={item.name}
                               name="name"
                        />
                    </div>
                    <div className="plus-item-type">
                        <label>Type d'article *</label>
                        <input className="input-type"
                               type="text"
                               placeholder="Veuillez entrer le type d'article "
                               onChange={handleChange}
                               value={item.type}
                               name="type"
                        />
                    </div>
                    <div className="plus-item-description-description">
                        <label>Description</label>
                        <input className="input-description"
                               type="text"
                               placeholder="Veuillez entrer la description d'article"
                               onChange={handleChange}
                               value={item.description}
                               name="description"
                        />
                    </div>

                </div>
                <div className="plus-item-description">
                    <div className="plus-item-dimensions">
                        <label>Dimensions *</label>
                        <input className="input-dimensions"
                               type="text"
                               placeholder="Veuillez entrer les dimensions de l'article (L x l x H)"
                               onChange={handleChange}
                               value={item.dimension}
                               name="dimension"
                        />
                    </div>
                    <div className="plus-item-description-prix">
                        <label>Prix unitaire *</label>
                        <input className="input-prix"
                               type="text"
                               placeholder="Veuillez entrer le prix unitaire de l'article"
                               onChange={handleChange}
                               value={item.price}
                               name="price"
                        />
                    </div>
                    <div className="plus-item-description-Date-entrée ">
                        <label>Date d'entrée en stock *</label>
                        <input className="input-entree"
                               type="text"
                               placeholder="Veuillez entrer la date d'entrée en stock de l'article"
                               onChange={handleChange}
                               value={item.date}
                               name="date"
                        />
                    </div>

                    <div>
                        <div className="plus-item-description-quantity">
                            <label>Quantité *</label>
                            <input className="input-quantity"
                                   type="text"
                                   placeholder="Veuillez entrer la quantité"
                                   onChange={handleChange}
                                   value={item.quantity}
                                   name="quantity"
                            />
                        </div>
                        <button className="add-btn">Ajouter</button>
                    </div>
                </div>
            </form>
            <button onClick={props.togglePlusVisibilty} className="hide-btn">Masquer</button>
        </div>
    )
}

export default Plus
