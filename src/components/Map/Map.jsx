import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) =>{
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px');
  


    return(
      <div className={classes.mapContainer}>
        <GoogleMapReact 
         bootstrapURLKeys={{key : 'AIzaSyBw11rSlr18uoKkDUcaIBZkMuZOXF_OnbU'}}
         defaultCenter={coordinates}
         center={coordinates}
         defaultZoom={14}
         margin={[50 , 50 , 50 , 50]}
         options={''}
         onChange={(e) =>{
          setCoordinates({lat:e.center.lat,lng:e.center.lng});
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
         }}
         onChildClick={(child) => setChildClicked(child)}

        >
          {places?.map((place,i) =>(
            <div className={classes.markerContainer}
               lat = {Number(place.latitude)}
               lng = {Number(place.longitude)}
               key = {i}
            >
              {
                !isDesktop?(
                  <LocationOnOutlinedIcon  color='primary' fontSize='large'/>
                ):(
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img 
                     className={classes.pointer}
                     src ={place.photo ? place.photo.images.large.url : 'https://imgs.search.brave.com/XWjj3xKN9aN3fiKNIq9fF8UZaklGbXlNAQh7t5HDLXs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy10YWJs/ZS1mdWxsLWRlbGlj/aW91cy1mb29kLWNv/bXBvc2l0aW9uXzIz/LTIxNDkxNDEzNTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc' }
                     alt={place.name}
                    />

                    <Rating size = 'small' value = {Number(place.rating)} readOnly />
                  </Paper>
                )
               

              }

            </div>
          ))}

        </GoogleMapReact>
      </div>
    );
}

export default Map;