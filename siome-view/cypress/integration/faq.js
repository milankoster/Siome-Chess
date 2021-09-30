import {login} from "../login";

describe("Test the faq page", () => {

    beforeEach(() => {
        login()
        cy.visit("/faq")
    })

    describe("Render the faq", () => {
        it("renders correctly", () => {
            cy.get(".faq-wrapper").should("be.visible")
            cy.contains("What's the aim").should("be.visible")
            cy.contains("My main goal").should("be.hidden")
        })
    });

    describe("Open & close faq item", () => {
        it("renders correctly", () => {
            cy.contains("What's the aim").click()
            cy.contains("My main goal").should("be.visible")
            cy.contains("What's the aim").click()
            cy.contains("My main goal").should("be.hidden")
        })
    });

})