import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import List from "./List";
import Item from "./Item";
import Modal from "./Modal";

const SAVED_ITEMS = "savedItems";

function Todo() {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

        if(savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text) {
        let it = new Item(text);

        setItems([...items, it]);
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id != item.id);
        setItems(filteredItems);
    }

    function onHideModal(e) {
        setShowModal(false);
    }
    
    return(
        <div className="container">

            <header className="header">
                <h1>To-do list</h1>
                <button className="addButton" onClick={() => {setShowModal(true)}}>+</button>
            </header>

            <List onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>

        </div>
    );

}

export default Todo;