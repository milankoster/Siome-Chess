export function login() {
    cy.kcLogout();
    cy.kcLogin("user");
    cy.visit("/");
}

