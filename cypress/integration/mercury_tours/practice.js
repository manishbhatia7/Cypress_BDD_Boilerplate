import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import practicepage from '../Pages/practicepage.js'
const practice=new practicepage()
Given('I open the mercury tours website',()=>
{
    practice.visit()
    practice.asserthomePage()    

})


When('I enter username as {string}',text=>
{
    practice.enterUserName(text)
})

And('I enter password as {string}',text=>
{
    practice.enterPassword(text)
})

And('I click on submit button',()=>{ 
    practice.clickOnSubmit()
})

Then('I should be able to successfully login to website.',()=> {
    practice.assertSuccessfulLogin()
})

When('I click on signoff link',()=> 
{ 
    practice.clickSignOffLink()
})

Then('I should be redirected successfully',()=>
{
    practice.assertSignOff()
})