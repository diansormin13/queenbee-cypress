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
    getaddProductToCart(){return cy.xpath('(//button[@class="chakra-button recommendationCard_card-buy-now-btn__heNI_ css-5makxi"])[1]')}
    getPilihLayananPengiriman(){return cy.contains('h1','Pilih layanan pengiriman')}
    getBtnCart(){return cy.xpath(`//div[@class="HeaderQbee_total-cart__Acy0A"]`)}
    getDilivery(delivery){return cy.xpath(`//p[contains(@class,"styles_regular-delivery-title")][text()="${delivery}"]`)}
    getKurir(kurir){return cy.xpath(`//p[contains(@class,"pickCourier_courier-name")][text()="${kurir}"]`)}
    getBtnPilihPembayaran(){return cy.xpath(`//button[contains(@class,"styles_checkout-btn")][text()="Pilih Pembayaran"]`)}
    getTxtBatasPembayaran(){return cy.xpath(`//p[contains(@class,"style_countdown")][text()="Batas waktu pilih pembayaran"]`)}
    getCekPesanan(){return cy.get('.chakra-toast > .chakra-toast__inner > .styles_toast-container__4_Rq9 > .chakra-text')}
    getBank(){return cy.get('#accordion-button-8 > .chakra-icon')}
    getTypeofBank(bank){return cy.xpath(`//p[contains(@class,"style_data-bank")][text()="${bank}"]`)}
    getBtnPembayaranDahulu(){return cy.xpath(`//button[contains(@class,"chakra-button")][text()="Pilih pembayaran telebih dahulu"]`)}
    getBtnBayarPesanan(){return cy.xpath(`//button[contains(@class,"chakra-button")][text()="Bayar pesanan"]`)}
    getBtnSudahMembayar(){return cy.xpath(`//button[contains(@class,"chakra-button")][text()="Saya sudah membayar"]`)}
    getCancelOder(){return cy.xpath(`//button[contains(@class,"cancel-order")][text()="Batalkan pesanan"]`)}
    getBerhasilBayar(){return cy.xpath(`//p[contains(@class,"chakra-text")][text()="Pembayaran kamu belum berhasil"]`)}
    getTxtBatalkanPesanan(){return cy.get(`#chakra-modal--header-3`)}
    getBtnConfrimBatalkanPesanan(){return cy.xpath(`//button[contains(@class,"style_button-batalkan")][text()="Ya, batalkan pesanan"]`)}
    getNotifBatalkanPesanan(){return cy.get('.chakra-toast > .chakra-toast__inner > .styles_toast-container__4_Rq9 > .chakra-text')}
    
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
        this.getaddProductToCart().click()
    }
    
    processPaymentProduct(delivery,kurir,bank){
        this.selectPengiriman(delivery)
        this.selectKurir(kurir)
        this.procesBank(bank)
        this.finalPayment()
    }

    selectPengiriman(delivery){
        this.getPilihLayananPengiriman().click()
        this.getDilivery(delivery).should('be.visible')
        this.getDilivery(delivery).click()
    }

    selectKurir(kurir){
        this.getKurir(kurir).should('be.visible')
        this.getKurir(kurir).click()
    }

    procesBank(bank){
        this.getBtnPilihPembayaran().should('be.enabled')
        this.getBtnPilihPembayaran().click()
        this.getBtnPembayaranDahulu().should('be.visible')
        this.getBtnPembayaranDahulu().should('not.be.enabled')
        this.getBank().should('be.visible') 
        this.getBank().click()
        this.getBtnPembayaranDahulu().should('not.be.enabled')
        this.getTypeofBank(bank).should('be.visible')
        this.getTypeofBank(bank).click()
        this.getBtnBayarPesanan().should('be.enabled')
        this.getBtnBayarPesanan().click()
    }

    finalPayment(){
        this.getBtnSudahMembayar().should('be.visible')
        this.getBtnSudahMembayar().click()
    }

    validateBerhasilOrder(){
        this.getBerhasilBayar().should('be.visible')
        this.getBerhasilBayar().should('contain','Pembayaran kamu belum berhasil')
    }

    cancelOrder(){
        this.getCancelOder().should('be.visible')
        this.getCancelOder().click()
        this.getBtnConfrimBatalkanPesanan().should('be.visible')
        this.getBtnConfrimBatalkanPesanan().click()
        this.getNotifBatalkanPesanan().should('be.visible')
    }

    clickButtonKeranjang(){

    }
  }
  
  export const cartProduct = new CartProduct()
  