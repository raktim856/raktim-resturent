import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetails = props => {
    return (
        <Card className="my-2">
            <CardImg src={props.dish.image} alt={props.dish.name} />
            <CardBody>
                <CardTitle tag="h5">{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
                <CardText>
                    <small className="text-muted">
                        BDT: {props.dish.price} TK
                    </small>
                </CardText>
                <CardTitle tag="h4">Comments:</CardTitle>
                <hr />
                <LoadComments comment={props.dish.comments}/>
            </CardBody>
        </Card>
    );
}
export default DishDetails;