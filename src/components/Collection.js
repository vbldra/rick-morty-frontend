import { ListItemAvatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const Collection = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        async function loadCharacters() {
            const res = await fetch('/characters/collection')
            const data = await res.json()
            setCharacters(data)
        }
        loadCharacters()
    }, [])

    return (
        <ul>
            {characters.map(item => <li>{item.name}</li>)}
        </ul>
    )
}

export default Collection