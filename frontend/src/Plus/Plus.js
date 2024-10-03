import React from 'react'
import Field from './Field'
import Duplicates from "./Duplicates";
import DimensionForm from "./DimensionForm";
import DateForm from "./DateForm";
const Plus = (props) => {
const [item,setItem] = React.useState({
    id:"",
    name: "",
    type: "",
    description: "",
    quantity: "",
    dimension:"",
    price:"",
    date:""
})
    const [isEmpty, setIsEmpty] = React.useState({
        name: false,
        type: false,
        description: false,
        quantity: false,
        dimension:false,
        price:false,
        date:false
    });
    const [errors, setErrors] = React.useState({
        name: false,
        type: false,
        description: false,
        quantity: false,
        dimension:false,
        price:false,
        date:false
    });
    const [errorMessage, setErrorMessage] = React.useState("")
    const validateDimensions = (dimensions) => {
        const dimensionsPattern = /^\d+\*\d+\*\d+$/;
        return dimensionsPattern.test(dimensions);
    };
    const validateDate = (dateString) => {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!datePattern.test(dateString)) {
            return { valid: false, message: "Le format de la date doit être YYYY-MM-DD" };
        }
        const [year, month, day] = dateString.split('-').map(Number);

        const date = new Date(year, month - 1, day); // JS months are 0-based

        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            return { valid: false, message: "La date est invalide" };
        }

        const today = new Date();
        if (date < today) {
            return { valid: false, message: "La date ne peut pas être dans le passé" };
        }
        return { valid: true, message: "" };
    };


    const handleChange = (event) => {
        const {name, value} = event.target
        setItem(prevState => ({
            ...prevState,
            [name]: value
        }))

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const empty = {
            name: item.name.trim() === '',
            type: item.type.trim() === '',
            description: item.description.trim() === '',
            quantity: item.quantity.trim() === '',
            dimension:item.dimension.trim() === '',
            price:item.price.trim() === '',
            date:item.date.trim() === ''
        };
        setIsEmpty(empty);
        const newErrors = {
            ...errors,

            dimension: !validateDimensions(item.dimension),
            date: !validateDate(item.date).valid
        };
        setErrors(newErrors);
        const dateValidation = validateDate(item.date);
        newErrors.dateMessage = dateValidation.message;
        const Empty = Object.values(empty).some(error => error);
        const hasError = Object.values(newErrors).some(error => error);
        if (!Empty) {
            if (!hasError) {
            props.onAddItem(item);
            setItem({
                name: "",
                type: "",
                description: "",
                quantity: "",
                dimension: "",
                price: "",
                date: ""
            })
        }
        }
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
                        {isEmpty.name && <Field />}
                        <input className="input-name"
                               type="text"
                               placeholder="Veuillez entrer le nom d'article"
                               onChange={handleChange}
                               value={item.name}
                               name="name"
                        />
                    </div>
                    <div className="plus-item-type"><label>Type d'article *</label>
                        {isEmpty.type && <Field />}
                        <input className="input-type"
                               type="text"
                               placeholder="Veuillez entrer le type d'article "
                               onChange={handleChange}
                               value={item.type}
                               name="type"
                        />
                    </div>
                    <div className="plus-item-description-description">
                        <label>Description *</label>
                        {isEmpty.description && <Field />}
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
                    <div className="plus-item-dimensions"><label>Dimensions *</label>
                        {isEmpty.dimension && <Field />}
                        {errors.dimension && <DimensionForm />}
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
                        {isEmpty.price && <Field />}
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
                        {isEmpty.date && <Field />}
                        {errors.date && <DateForm message={errors.dateMessage} />}
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
                            {isEmpty.quantity && <Field />}
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
