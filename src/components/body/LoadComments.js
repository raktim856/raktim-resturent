import React from "react";
import { CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

const LoadComments = props =>{
    return(
        props.comment.map(props =>{
            return(
                <div key={props.id}>
                    <CardTitle tag="h6">Author ID: {props.author}</CardTitle>
                    <CardText>{props.comment}</CardText>
                    <CardText>{dateFormat(props.date, "dddd, mmmm dS, yyyy, h:MM TT")}</CardText>
                    <hr />
                </div>
            );
        })
    );
}
export default LoadComments;