import { Clients } from "./Business.js";
import { getClients, filteredClients, filteredManufacturingBusinesses, filteredAgents } from "./database.js";




const clientTarget = document.querySelector("#container")

export const ClientsList = () => {
    const clientArray = getClients()
    clientTarget.innerHTML += "<h1>Active Businesses</h1>"

    clientArray.forEach(
        (clientObject) => {
            clientTarget.innerHTML += Clients(clientObject)
        }
    );
}

export const nyBusinesses = (state) => {
    const stateArray = filteredClients(state)
    clientTarget.innerHTML += `<article class = "businessList--${state}>`
    clientTarget.innerHTML += `<h1>${state} Businesses</h1>`
    stateArray.forEach(
        (clientObject) => {
            clientTarget.innerHTML += Clients(clientObject)
        }
    )
    clientTarget.innerHTML+= "</article>"
}

export const manufacturingBusinesses = () => {
    const manBusiness = filteredManufacturingBusinesses()
    clientTarget.innerHTML += `<article class = "manufacturingBusinesses">`
    clientTarget.innerHTML+= "<h1>Manufacturing Businesses</h1>"
    
    manBusiness.forEach(
        (manObject) => {
            clientTarget.innerHTML += Clients(manObject)
        }
    )
    clientTarget.innerHTML += `</article>`
}

export const agents = () => {
    const agents = filteredAgents()
   clientTarget.innerHTML += `<article class = "agents">`
   clientTarget.innerHTML+= "<h1>Business Agents</h1>"
    
    
    
    agents.forEach(
        (agent) => {
           clientTarget.innerHTML+= `<h2 class="client__">${agent.agentName}</h2>
            <div class="client__address">
                <p>${agent.agentCompany} </p>
                <p>${agent.agentPhone}</p>`
        }
    )
   clientTarget.innerHTML+= "</ul>"
   clientTarget.innerHTML += `</article>`
}
