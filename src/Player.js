import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Player=({element})=>{
    return(
            <CardGroup>
    <Card>
      <Card.Img variant="top" src={element.image} style={{width:"180px",height:"150px"}} />
      <Card.Body>
        <Card.Title style={{font:"Cursive", color:"#003566"}}>{element.name}</Card.Title>
        <Card.Text style={{font:"Serif" , color:"gray"}} >
      team :{element.team}  <br/> 
       natinality :{element.nationality} <br/>
       jersey number :{element.jerseyNumber}  <br/>
       age :{element.age} <br/>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">more info</small>
      </Card.Footer>
    </Card>
    </CardGroup>

    )
}
export default Player