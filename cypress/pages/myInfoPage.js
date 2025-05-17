class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameTest:':nth-child(2) > :nth-child(2) > .oxd-input',
            lastNamefield: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericCamboBox: ".oxd-select-text--arrow",
            Nationality: ".oxd-select-dropdown > :nth-child(27)",
            MaritalStatus:".oxd-select-dropdown > :nth-child(2)",
            dateCloseButton: ".--close",
            submitButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
        }

        return selectors
    }


    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameTest).clear().type(middleName)
        cy.get(this.selectorsList().lastNamefield).clear().type(lastName)

    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    

    fillStatus() {
        cy.get(this.selectorsList().genericCamboBox).eq(0).click()
        cy.get(this.selectorsList().Nationality).click()
        cy.get(this.selectorsList().genericCamboBox).eq(1).click()
        cy.get(this.selectorsList().MaritalStatus).click()

    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        
    }






    
    
    
    



}

export default MyInfoPage