import Keycloak from 'keycloak-js'

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
    "realm": "Siome",
    "url": "http://localhost:8080/auth",
    "ssl-required": "external",
    "clientId": "SiomeApp",
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0
})

export default keycloak