class homePage{
    static loadHomePage(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.wait(5000)
    }
}
class newPage extends homePage{
    static loadAccountPage(){
        cy.get('#onlineBankingMenu').click()
    }
}