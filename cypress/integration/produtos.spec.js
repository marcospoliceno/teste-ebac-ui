/// <reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
    });
    it('Deve adicionar um produto ao carinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });
    it('Deve adicionar produtos ao carinho com - Custom Commands', () => {
        cy.addProdutos('Abominable Hoodie', 'XS', 'Red', 3)
    });
    it('Deve adicionar produtos ao carinho com - Custom Commands', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Red', 3)
    });
});

