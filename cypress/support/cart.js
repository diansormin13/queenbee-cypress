import 'cypress-xpath'

class CartProduct {
  
    getBtnEventBerlangsung(){return cy.contains('button', 'Lihat event berlangsung')}
    getIconCart(){return cy.get('.HeaderQbee_total-cart__Acy0A')}
    getProduct() {return cy.get('#toggle-nav-menu-title')}
    getbtnKuisPersonalisasi(){return cy.contains('p.chakra-text', 'Kuis Personalisasi')}
    getProfile(profile){return cy.xpath(`//div[@id="search-all-product"]//span[text()="${profile}"]`)}
    getBtnSearch(){return cy.xpath(`(//div[@id="search-all-product"])[1]`)}
    getSearchProduct(){return cy.xpath(`//input[@placeholder="Produk atau konten lainnya"]`)}
    getSuggestionSearchProduct(){return cy.xpath('//p[@class="chakra-text searchModal_product-name__iR1d_ css-0"]')}
    getFirstLineSearchProduct(){return cy.xpath('(//h5[@class="chakra-heading css-xfpkx2"])[1]')}
    getNutritionProduct(){return cy.get(`#homepage-section-category__Nutritional`)}
    getTxtNutriontal(){return cy.contains('h1','Nutritional')}
    getToKeranjang(){return cy.xpath('(//button[@class="chakra-button recommendationCard_card-buy-now-btn__heNI_ css-5makxi"])[1]')}
    getCheckboxHampers(){return cy.xpath(`//div[@aria-label="Checkbox Hampers"]`)}

    verifyPageCart(profile) {
      this.getBtnEventBerlangsung().should('be.visible')
      this.getIconCart().should('be.visible')
      this.getProduct().should('be.visible')
      this.getbtnKuisPersonalisasi().should('be.visible')
      this.getProfile(profile).should('contain',profile)
    }

    serachProduct(product){
        this.getBtnSearch().click({ multiple: true })
        this.getSearchProduct().type(product)
        this.getSuggestionSearchProduct().should('be.visible')
    }
    
    addToCartNutrition(){
        this.getNutritionProduct().scrollIntoView()
        this.getNutritionProduct().click()
        this.getTxtNutriontal().should('be.visible')
        this.getToKeranjang().click()
        this.getCheckboxHampers().click()
    }
  }
  
  export const cartProduct = new CartProduct()
  