import React from "react";

const ListItem = (props) => {
    return (
        <>
            <div className="list-style">
                <button onClick={() => {
                    props.onSelect(props.id);
                }}> - </button>
                <li>{props.itemVal}</li>
            </div>
        </>
    )
}

export default ListItem;