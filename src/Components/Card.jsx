import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function BCard(props) {
  const navigate = useNavigate();
  const gothere = () => {
    navigate(`/products/${props.id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt={props.title}
        height='140'
        image={props.imag}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip disableHoverListener title='Add'>
          <Button>${props.price}</Button>
        </Tooltip>
        <Tooltip disableHoverListener title='Add'>
          <Button>{props.stock} Qty.</Button>
        </Tooltip>
        <div sx={{ display: "flex" }}>
          <Button variant='outlined' size='small' onClick={gothere}>
            {/* <Link to={}>details</Link> */}
            Details...
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
