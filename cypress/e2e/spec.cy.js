import { homePage } from '../support/pageLogin'
import { cartProduct } from '../support/cart'

describe('open Homepage QueenBe', () => {
  const credential = {
    noHP: '85171140238',
    pass: '@QWEqwe123',
    profile: 'test',
    product: 'Collagen drink',
    delivery:'Regular',
    bank: 'BCA Virtual Account',
    kurir: 'jne'
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

  it('As a Customer(+), I want to add product to cart and process payment until sent payment', () => {
    cartProduct.addToCartNutrition()
    cartProduct.processPaymentProduct(credential.delivery,credential.kurir,credential.bank)
    cartProduct.validateBerhasilOrder()
  })

  it('As a Customer(-), I want to batalkan pesanan after choose type ef pembayaran', () => {
    cartProduct.addToCartNutrition()
    cartProduct.processPaymentProduct(credential.delivery,credential.kurir,credential.bank)
    cartProduct.cancelOrder()
  })

  it('As a Customer(-), unable to click beli sekarang if there is no product at cart', () => {
    cartProduct.clickButtonKeranjang()
  })
})
