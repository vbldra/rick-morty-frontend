import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core'

import { charactersContext } from '../App'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Characters() {
    const {characters, dispatch} = useContext(charactersContext)

    const classes = useStyles()

    const collect = async characterId => {
        console.log("collect", characterId)
        const res = await fetch('/characters/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({character: characterId})
        })
        const data = await res.json()
        dispatch({type: 'resetCollection', payload: data})
    }

    return (
        <div>
            <ul>
                {characters.randomCharacters.map(character => 
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={character.image}
                            title={character.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {character.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {character.species}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button onClick={() => collect(character.id)} size="small" color="primary">
                            {character.collected ? 'Collected' : 'Collect'}
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                        </CardActions>
                    </Card>
                )}
            </ul>
        </div>
    )
}

export default Characters
