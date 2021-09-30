import {useContext} from "react";
import './CardItem.sass'

import React from 'react';
import {Card, Accordion, AccordionContext, useAccordionToggle} from "react-bootstrap";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(eventKey,
        () => {
        })

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            className={"accordion-header " + (isCurrentEventKey ? "open" : "closed")}
            onClick={decoratedOnClick}
        >
            <div className="accordion-header-wrapper">
                <FontAwesomeIcon
                    icon={faCaretRight}
                    className={"accordion-header-icon " + (isCurrentEventKey ? "open" : "closed")}
                />
                {children}
            </div>
        </button>
    );
}

const CardItem = props => {
    return (
        <Card className="accordion-card">
            <ContextAwareToggle as={Card.Header} eventKey={props.eventKey}>
                <div className="accordion-header-text">
                    {props.header}
                </div>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>
                    <div className="accordion-body-text">
                        {props.body}
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default CardItem;
