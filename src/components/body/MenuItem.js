import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
const MenuItem = props => {
    return (
        <div>
            <Card className="my-2 border-1" style={{cursor:'pointer'}} onClick={props.selectDish}>
                <CardImg src={props.dish.image} alt={props.dish.name} className="img-fluid" />
                <CardImgOverlay>
                    <CardTitle tag="h6">
                        {props.dish.name}
                    </CardTitle>
                </CardImgOverlay> 
            </Card>
        </div>
    );
}
export default MenuItem;