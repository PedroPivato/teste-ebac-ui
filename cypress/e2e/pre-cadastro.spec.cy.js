/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadasstro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@Teste155')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('.form-row-first > label').type(nomeFaker)
        cy.get('.form-row-last > label').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve completar o pré cadastro com sucesso usando comandos customizados', () => {
        let emailFaker2 = faker.internet.email()

        cy.preCadastro(emailFaker2, 'senha@#forte', 'Pedro', 'Pivato')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

});