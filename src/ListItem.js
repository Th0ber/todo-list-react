import React from "react";

function ListItem(props) {

    return(
        <li className="item">
            {props.item.text}
            <div>
                <label>
                    <input type="checkbox"></input>
                    <span class="custom-checkbox"></span> Done
                </label>
                <button onClick={() => { props.onItemDeleted(props.item) }} className="delete-btn">🗑 Delete</button>
            </div>
        </li>
    )
    
}

export default ListItem;