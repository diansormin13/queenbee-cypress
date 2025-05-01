import { homePage } from '../support/pageLogin'
import { cartProduct } from '../support/cart'

describe('open Homepage QueenBe', () => {
  const credential = {
    noHP: '85171140238',
    pass: '@QWEqwe123',
    profile: 'test',
    product: 'Collagen drink'
  }

  beforeEach(() => {
    cy.bukaHomepage()
    homePage.login(credential.noHP, credential.pass)
  })

  it('As a Customer(+), i want to acess homepage queenBe', () => {
    cartProduct.verifyPageCart(credential.profile)
  })

  it('As a Customer(+), I want to search spesific product', () => {
    cartProduct.serachProduct(credential.product)
  })

  it('As a Customer(+), I want to add product to cart', () => {
    cartProduct.addToCartNutrition()
  })

})
