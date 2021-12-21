it('Creates new pets based on json data', () => {
    cy.readFile('src/ressources/fixtures/petData.json').then(data => {
        for (const petData of data.petData) {
            cy.addPet(petData.petCategoryName, petData.petName, petData.petStatus)
        }
    })
})
it('Creates new pets based on csv data', () => {
    cy.readFile('src/ressources/fixtures/petData.csv').then(data => {
        for (const petData of data.trim().split('\n').slice(1)) {
            cy.addPet(petData.split(';')[1], petData.split(';')[0],
                petData.split(';')[2])
        }
    })
})