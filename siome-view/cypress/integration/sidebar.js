import {login} from "../login";

describe("Test the sidebar", () => {

    beforeEach(() => {
        login()
    })

    describe("Render the sidebar", () => {
        it("renders correctly", () => {
            cy.get(".sidebar-wrapper").should("exist")
            cy.contains("Matches").should("be.visible")
            cy.contains("Computer").should("be.visible")
            cy.contains("Invite").should("be.visible")
            cy.contains("Matchmaking").should("be.visible")
            cy.contains("Faq").should("be.visible")
        })
    });

    describe("Test sidebar links", () => {
        testSidebarLink("play", "Play", "/play")
        testSidebarLink("matches", "Matches", "/matches")
        testSidebarLink("computer", "Computer", "/computer")
        testSidebarLink("invite", "Invite", "/invite")
        testSidebarLink("matchmaking", "Matchmaking", "/matchmaking")
    })

    describe("Click faq button", () => {
        it("links correctly", () => {
            cy.get(".nav-bottom-button").contains("Faq").should("be.visible")
            cy.get(".nav-bottom-button").contains("Faq").click()
            cy.url().should("include", "/faq")
        })
    })

    // TODO - Test if logout is completed when authentication does not redirect automatically
    describe("Click logout button", () => {
        it("logs out correctly", () => {
            cy.get(".nav-button").contains("Log Out").should("be.visible")
            cy.get(".nav-button").contains("Log Out").click()
        })
    })
})


function testSidebarLink(name, text, link){
    describe("Click " + name + " button", () => {
        it("links correctly", () => {
            cy.get(".sidebar-nav-link").contains(text).should("be.visible")
            cy.get(".sidebar-nav-link").contains(text).click()
            cy.url().should("include", link)
        })
    })
}