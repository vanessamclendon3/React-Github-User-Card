import React from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';


const Followers = props =>{
    return (
        <div>
        <CardGroup>
      <Card>
        <CardImg top width="100%" src={props.avatar_url} alt="followers avatar" />
        <CardBody>
          <CardTitle>{props.login}</CardTitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </CardGroup>
        </div>
    
        // <div>
        // <Wrapper>
        //    {props.id}
        //    <p>login: {props.login}</p>
        //    <img src={props.avatar_url} alt="followers avatar"/>
        // </Wrapper>
        // </div>
     
    )
}

export default Followers;