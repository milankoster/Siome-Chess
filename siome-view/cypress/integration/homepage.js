import {login} from "../login";

describe("Test the home page", () => {

    beforeEach(() => {
        login()
    })

    describe("Render the home page", () => {
        it("renders correctly", () => {
            cy.get(".chessboard-column").should("be.visible")
            cy.contains("Play Chess for Free").should("be.visible")
            cy.contains("Play Online").should("be.visible")
            cy.contains("Play Computer").should("be.visible")
            cy.get(".footer-wrapper").should("be.visible")
            cy.get(".sidebar-wrapper").should("be.visible")
            cy.get(".header-wrapper").should("be.hidden")

        })
    });

    describe("Play button links to play page", () => {
        it("links correctly", () => {
            cy.get("#play").should("be.visible")
            cy.get("#play").click()
            cy.url().should("include", "/play")
        })
    })

    describe("Medium Viewport",() => {
        it("renders correctly",() => {
            cy.viewport(1000, 620)
            cy.get(".chessboard-column").should("be.hidden")
        })
    })

    describe("Small Viewport", () => {
        it("renders correctly", () => {
            cy.viewport(700, 620)
            cy.get(".chessboard-column").should("be.hidden")
            cy.get(".pro-sidebar").should("be.hidden")
            cy.get(".header-wrapper").should("be.visible")
        })
    })

    describe("Open and Close Collapsed Sidebar", () => {
        it("renders correctly", () => {
            cy.viewport(700, 620)
            cy.get(".btn-toggle").click()
            cy.get(".pro-sidebar").should("be.visible")
            cy.get(".app").click("topRight")
            cy.get(".pro-sidebar").should("be.hidden")
        })
    })


})