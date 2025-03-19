import React from "react";
import ListItem from "./ListItem";

function List(props) {

    return(
        <ul>
            {props.items.map(item =>
                <ListItem item={item} onItemDeleted={props.onItemDeleted} key={item.id}></ListItem>
            )}
        </ul>
    )
    
}

export default List;