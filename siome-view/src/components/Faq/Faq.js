import React, {Component} from 'react';
import AccordionItem from "./AccordionItem/AccordionItem";
import './Faq.sass'
import {items} from "./faq.json";

class Faq extends Component {

    render() {
        return (
            <div className="faq-wrapper">
                <div className="faq-header">
                    Frequently Asked Questions
                </div>
                <AccordionItem items={items}> </AccordionItem>
            </div>
        );
    }
}

export default Faq;
