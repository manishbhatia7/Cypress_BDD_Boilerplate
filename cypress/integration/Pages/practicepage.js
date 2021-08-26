class practicepage
{
visit()
{
    cy.visit('http://demo.guru99.com/test/newtours/index.php')
}
asserthomePage()
{
    cy.url().should('include','http://demo.guru99.com')
}
enterUserName(text1)
{
    cy.xpath('//input[@name="userName"]').type(text1)
    return this
}
enterPassword(text2)
{
    cy.xpath('//input[@name="password"]').type(text2)
    return this
}
clickOnSubmit()
{
    cy.xpath('//input[@name="submit"]').click()
}

assertSuccessfulLogin()
{
    cy.get('td>h3').contains('Login Successfully')
}
clickSignOffLink()
{
    cy.contains('SIGN-OFF').click()
}

assertSignOff()
{
    cy.contains('SIGN-ON').should('be.visible')
}

}
export default practicepage