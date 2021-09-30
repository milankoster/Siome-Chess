import {login} from "../login";

describe("Test the play page", () => {

    beforeEach(() => {
        login()
        cy.visit("/play")
    })

    describe("Render the play page", () => {
        it("renders correctly", () => {
            cy.get(".play-chessboard-wrapper").should("exist")
            cy.get(".footer-wrapper").should("be.visible")
            cy.get(".sidebar-wrapper").should("be.visible")
            cy.get(".header-wrapper").should("be.hidden")
        })
    });

    describe("Show chessboard", () => {
        it("render chessboard", () => {
            cy.get("#connect-button").click()
            cy.get(".cg-shapes").should("exist")

        })
    });

})


