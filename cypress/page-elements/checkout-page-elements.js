///<reference types = "cypress"/>
export default class CheckoutPageElements{
    proceedToCheckOutSummaryBtn = '.standard-checkout'
    proceedToCheckoutStepsBtn = '.cart_navigation > button'
    newAccountEmailInput = '#email_create'
    createAccountBtn = '#SubmitCreate'
    existingAccountEmailInput = '#email'
    existingAccountPasswordInput = '#passwd'
    signInBtn = '#SubmitLogin'
    existingEmailAlert = '#create_account_error'
    checkbox = '#cgv'

    getPaymentMethods(method){
        return `[title="Pay by ${method}"]`
    }
}