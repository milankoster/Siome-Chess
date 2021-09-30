import React from 'react';
import CardItem from "../CardItem/CardItem";
import './AccordionItem.sass'
import {Accordion} from "react-bootstrap";


const AccordionItem = (props) => {
    return (
        <Accordion defaultActiveKey="">

            {props.items.map((card, index) => <CardItem header={card.header} body={card.body}
                                                       eventKey={index.toString()}/>)}

        </Accordion>
    );
};

export default AccordionItem;