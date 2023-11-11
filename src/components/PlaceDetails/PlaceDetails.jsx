import React from 'react';
import {Box, Typography, Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

const PlaceDetails = ({place,selected,refProp}) =>{

  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({behaviour : "smooth", block:"start"})
    return(
      <Card elevation={6}>
        <CardMedia 
           style={{height:350}}
           image={place.photo ? place.photo.images.large.url : 'https://imgs.search.brave.com/XWjj3xKN9aN3fiKNIq9fF8UZaklGbXlNAQh7t5HDLXs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy10YWJs/ZS1mdWxsLWRlbGlj/aW91cy1mb29kLWNv/bXBvc2l0aW9uXzIz/LTIxNDkxNDEzNTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc' }
           title = {place.name}
        />
          <CardContent>
            <Typography gutterBottom variant = 'h5'>{place.name}</Typography>
           <Box display='flex' justifyContent='space-between' > 
           <Rating value = {Number(place.rating)} readOnly />
              <Typography gutterBottom variant='subtitled1' >Out of {place.num_reviews} reviews</Typography>
           </Box>



           <Box display='flex' justifyContent='space-between' > 
              <Typography variant='subtitled1' >Price</Typography>
              <Typography gutterBottom variant='subtitled1' >{place.price_level}</Typography>
           </Box>
           <Box display='flex' justifyContent='space-between'> 
              <Typography variant='subtitled1' >Ranking</Typography>
              <Typography gutterBottom variant='subtitled1' >{place.ranking}</Typography>
           </Box>

           {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt=''/>
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({name}) => (
          <Chip key={name} size='small' label = {name} className={classes.chip}/>
        ))}
        {place?.address && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitles}> 
              <LocationOnIcon /> {place.address}     
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}> 
              <PhoneIcon /> {place.phone}     
          </Typography>
        )}

        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url,'_blank')} >
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website,'_blank')} >
            Website
          </Button>
        </CardActions>
          
          </CardContent>
      </Card>
    );
}

export default PlaceDetails;