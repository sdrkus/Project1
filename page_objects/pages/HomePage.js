import Base from '../base'

class HomePage extends Base {
    get registrationNumberInput() {
        return $('#__next > div > div.page-wrapper > div.hero-wrapper > div.image-wrapper.false > div.content-wrapper > div.reg-to-qq.center.undefined > div > form > input')
    }
    get quoteButton() {
        return $('#__next > div > div.page-wrapper > div.hero-wrapper > div.image-wrapper.false > div.content-wrapper > div.reg-to-qq.center.undefined > div > form > button')
    }
    get cookiesButton() {
        return $('#cookie-consent > a > span')
    }
    
   get continueButton() {
       return $('#quick-quote > div > div.formbox.formbox--quick-quote-mileage > div.formbox__estimated-mileage-cta-wrapper > div.formbox__estimated-mileage-cta-continue > div.estimated-mileage-text-wrapper > p')
   }

   get noClaimsDropDown() {
       return $('#quick-quote-form > div:nth-child(1) > div.form-element > div')
   }
   get claimsDropDownOption() {
       return $('#react-select-ncd--option-1')
   }

   get ageInput() {
       return $('#age > input')
   }
   get postcodeInput() {
       return $('#postcode > input')
   }
   get insuranceRenew() {
       return $('#quick-quote-form > div:nth-child(1) > div:nth-child(7) > div')
   }
   get insuranceRenewDate() {
       return $('#react-select-renewal_month--option-1')
   }
   get proveParking() {
       return $('#quick-quote-form > div:nth-child(2) > div > div.text')
   }
   get finalQuoteButton() {
       return $('#quick-quote-form > button > span')
   }
   get annualEstimateAmount() {
       return $('#annual-estimate > div.mileage-estimator-wrapper > div.estimated-price-wrapper > div > h2')
   }
   get quoteEstimation() {
       return $('#quick-quote > div > div.formbox.formbox--quick-quote-mileage > div.formbox__estimated-mileage-wrapper > div > h4')
   }
   get noButton(){
       return $('#quick-quote > div > div.formbox.formbox--quick-quote-mileage > div.formbox__estimated-mileage-cta-wrapper > div.formbox__estimated-mileage-cta-change > p')
   }
   get otherMilesEstimateInput() {
       return $('#edit-mileage')
   }
   get secondContinueButton() {
       return $('#quick-quote > div > div.formbox.formbox--quick-quote-mileage > div.formbox__estimated-mileage-cta-wrapper > div')
   }

    fillRegistration() {
        this.registrationNumberInput.setValue('LM66 YBH')
    }
    submitRequest() {
        this.quoteButton.click()
    }

    acceptCookies() {
        this.cookiesButton.waitForExist()
        this.cookiesButton.click()
    }
    clickContinue() {
        this.continueButton.click()
    }
   
    selectClaimsOption() {
        this.noClaimsDropDown.click()
        this.claimsDropDownOption.click()
    }
    fillAgeField() {
        this.ageInput.setValue('32')
    }
    fillPostcodeField() {
        this.postcodeInput.setValue('SW11 5BH')
    }
    selectInsuranceRenewDate() {
        this.insuranceRenew.click()
        this.insuranceRenewDate.click()
    }
    parkCar() {
        this.proveParking.waitForExist()
        this.proveParking.doubleClick()
        this.proveParking.waitForDisplayed('PARKED!')
    }
    clickFinalQuoteButton() {
        this.finalQuoteButton.click()
    }
    textIsVisible() {
        this.annualEstimateAmount.waitForExist()
        this.annualEstimateAmount.waitForDisplayed('Your annual estimate is:')
    }
    estimationIsDisplayed() {
        this.quoteEstimation.waitForExist()
        this.quoteEstimation.waitForDisplayed('LAST YEAR WE THINK YOUR CAR TRAVELLED')
    }
    clickNoButton() {
        this.noButton.click()
    }
    fillOtherMilesEstimateField() {
        this.otherMilesEstimateInput.waitForExist()
        this.otherMilesEstimateInput.setValue('5000')
    }
    clickSecondContinue() {
        this.secondContinueButton.waitForExist()
        this.secondContinueButton.click()
    }

}

export default new HomePage()
