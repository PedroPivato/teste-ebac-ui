/// <reference types="cypress" /> 

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            // .eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it('Deve adicionar um produto ao carrinhho', () => {
        let quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
   
        cy.addProdutos('Chaz Kangeroo Hoodie', 'M', 'Black', 3)
        
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
   
        cy.addProdutos('Abominable Hoodie', 'XL', 'Blue', 4)
        
    });
});