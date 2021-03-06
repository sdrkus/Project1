import App from '../page_objects/App'
import HomePage from '..//page_objects/pages/HomePage'

describe('Test Suite - Quick Quote Happy Path', () => {
    it('Load Homepage', () => {
        App.loadHomepage()
        HomePage.pauseShort()
    
    })

    it('Accept Cookies', () => {
        HomePage.acceptCookies()

    })

    it('Enter Registration plate number and Click Get a Quick Quote', () => {
        HomePage.fillRegistration('LM66 YBH')
        HomePage.submitRequest()
        HomePage.pauseShort()
        HomePage.estimationIsDisplayed()  

    })
    it('Click Yes Button', () => {
        HomePage.clickContinue()
     

    })

    it('Enter Personal Details', () => {
        HomePage.selectClaimsOption()
        HomePage.fillAgeField('32')
        HomePage.fillPostcodeField('SW11 5BH')
        HomePage.selectInsuranceRenewDate()
      
    })

    it('Prove - drag and drop', () => {
        HomePage.parkCar()     

    })

    it('Click Get a Quick Quote', () => {
        HomePage.clickFinalQuoteButton()

    })

    it('The estimate', () => {
        HomePage.textIsVisible()
        HomePage.pauseShort()
        console.log('Kseniya test completed..')
    })


})