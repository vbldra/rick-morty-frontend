import { ListItemAvatar } from '@material-ui/core'
import React, { useEffect, useContext } from 'react'

import { charactersContext } from '../App'

const Collection = () => {
    const { characters } = useContext(charactersContext)

    return (
        <ul>
            {characters.collected.map(item => <li>{item.name}</li>)}
        </ul>
    )
}

export default Collection