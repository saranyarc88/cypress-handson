describe('file upload',()=>{
    it('should upload the file',()=>{
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        cy.get('[name=upfile').attachFile("excel-files/Book1.xlsx")
        cy.get('[value=Press]').click()
    })
})