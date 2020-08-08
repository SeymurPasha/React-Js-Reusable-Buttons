import React from 'react'

export default function Button(props) {

    const className = `button ${props.type} ${props.disabled} ${props.size} ${props.color}`
    return (
        <div className = 'button-component'>
            <label>{props.name}</label>
            <button className = {className} disabled = {props.disabled} >Reusable</button>
        </div>
    )
}
