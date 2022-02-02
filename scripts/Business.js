export const Clients = ( clientObject ) => {
    return `
        <section class="client">
            <h2 class="client__">${clientObject.companyName}</h2>
            <div class="client__address">
                <p>${clientObject.addressFullStreet} </p>
                <p>${clientObject.addressCity}, ${clientObject.addressStateCode} ${clientObject.addressZipCode}</p>
            </div>
            <hr>
        </section>
    `
}


// this function is taking the business obj and building a new obj by adding keys to the
// this will represent the way the new object's Html  to the DOM (providing structure)