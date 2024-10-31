import React from 'react'

export default function Row({ item, deletedTask }) {
    return (
        <li key={item.id}>{item.description}
            <button className='delete-button' onClick={() => deletedTask(item.id)}>Delete</button>
        </li>
    )
}