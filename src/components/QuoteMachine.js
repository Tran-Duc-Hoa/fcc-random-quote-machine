import React from 'react';
//material-ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
//fontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';



const QuoteMachine = (props) => (
    <Card>
        <CardContent style={{display: "flex"}}>
            
            <Typography id="text" style={{color: `${props.color}`}}>
                <FontAwesomeIcon icon={faQuoteRight} size="md" style={{marginRight: "0.4em"}}></FontAwesomeIcon>
                {props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span>
            </Typography>
        </CardContent>
        
        <CardActions>
            <IconButton 
                id="tweet-quote"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=motivated-quote`}
            >
                <FontAwesomeIcon icon={faTwitter} size="md"  style={{color: `${props.color}`}}></FontAwesomeIcon>
            </IconButton>
            <IconButton   style={{color: `${props.color}`}}
                id="tweet-quote"
                target="_blank"
                href={`https://facebook.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=motivated-quote`}
            >
                <FontAwesomeIcon icon={faFacebook} size="md"></FontAwesomeIcon>
            </IconButton>
            <Button id="new-quote" size="medium" onClick={props.assignNewQuoteIndex}  style={{color: `${props.color}`}}>Next Quote</Button>
        </CardActions>
    </Card>
);

export default QuoteMachine;
