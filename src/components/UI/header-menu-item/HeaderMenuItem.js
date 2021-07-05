import React from 'react'

const headerMenuItem = (props) => {
    return (
        <div className={props.Classes}>
            {props.menuText}
        </div>
    )
}

export default headerMenuItem
