import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const MyCard = ({data}) => {
  return (
    <Grid item md={2}>

    <Card sx={{ border:"2px solid black" }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="h5" component="div">
        {data.age}
      </Typography>

    </CardContent>
    <CardActions>
      <Link to={`${data.id}`}><Button size="small">Detail of {data.name}</Button></Link>
    </CardActions>
  </Card>
  </Grid>

  )
}

export default MyCard