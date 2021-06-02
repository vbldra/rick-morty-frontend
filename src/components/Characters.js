import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        async function loadCharacters() {
            const res = await fetch('/characters')
            const data = await res.json()
            setCharacters(data)
        }
        loadCharacters()
    }, [])

    const classes = useStyles()

    return (
        <div>
            <ul>
                {characters.map(character => 
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
                        <Button size="small" color="primary">
                            Share
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
