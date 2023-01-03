import React from 'react'
import Button from './Button'



const Header = ({ title, onAdd, showAdd }) => {
    return (

        <div className='header'>
            <h1> {title}</h1>
            <Button color={showAdd ? 'black' : 'red'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </div>

    )
}

export default Header