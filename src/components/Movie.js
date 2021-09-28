import React, { useState } from 'react';
import {
  Col,
  Card, CardImg, CardText, CardBody,
  ButtonGroup, Button, Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';



function Movie(props) {

  //STATE SET UP

  const [liked, setLiked] = useState(false);
  const [toWatch, setToWatch] = useState(false);
  const [countWatchMovie, setCountWatchMovie] = useState(0);
  const [myRatingMovie, setRatingMovie] = useState(0);

  //EVENT HANDLERS
  const handleLikeClick = () => {
    setLiked(!liked);
  }

  const handleToWatchClick = () => {
    setToWatch(!toWatch);
    setCountWatchMovie(countWatchMovie + 1);
  }

  const handleRatingPlusClick = () => {
    if (myRatingMovie < 10) {
      setRatingMovie(myRatingMovie + 1);
    }
  }

  const handleRatingMinusClick = () => {
    if (myRatingMovie > 1) {
      setRatingMovie(myRatingMovie - 1);
    }
  }

  //CONDITIONAL STYLES
  let likeStyle = {};
  let toWatchStyle = {};
  if (liked) {
    likeStyle = { color: '#E74C3C' };
  }
  if (toWatch) {
    toWatchStyle = { color: '#E74C3C' };
  }

  // POPULATE RATINGS

  let myRating = [];
  for (let i = 0; i < 10; i++) {
    let color = {};
    if (i < myRatingMovie) {
      color = { color: 'gold' };
    }
    myRating.push(<FontAwesomeIcon icon={faStar} style={color} key={i} onClick={() => setRatingMovie(i + 1)} />);
  }

  let globalRatingArray = [];
  let updatedGlobalRating = myRatingMovie > 0 ? Math.round(props.globalRating * props.globalCountRating + myRatingMovie) / (props.globalCountRating + 1) : props.globalRating;
  for (let i = 0; i < 10; i++) {
    let color = {};
    if (i < updatedGlobalRating) {
      color = { color: 'gold' };
    }
    globalRatingArray.push(<FontAwesomeIcon icon={faStar} style={color} key={i} />);
  }

  return (
    <Col xs="12" lg="6" xl="4" style={{ marginBottom: '20px' }} >
      <Card className='h-100'>
        <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
        <CardBody>
          <CardText>Like : <FontAwesomeIcon icon={faHeart} onClick={handleLikeClick} style={likeStyle} /> </CardText>
          <CardText>Nombre de vues <FontAwesomeIcon icon={faVideo} onClick={handleToWatchClick} style={toWatchStyle} /> <Badge color="secondary">{countWatchMovie}</Badge>
          </CardText>
          <CardText>Mon avis {myRating} <ButtonGroup size="sm">
            <Button onClick={handleRatingMinusClick}>-</Button>
            <Button onClick={handleRatingPlusClick}>+</Button>
          </ButtonGroup>
          </CardText>
          <CardText>Moyenne {globalRatingArray} ({myRatingMovie > 0 ? props.globalCountRating + 1 : props.globalCountRating}) </CardText>
          <CardText>{props.movieName}</CardText>
          <CardText>
            {props.movieDesc}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Movie;