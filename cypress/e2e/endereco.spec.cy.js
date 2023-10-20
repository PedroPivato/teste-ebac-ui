/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereço.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamente e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flavio', 'Silva', 'EBAC', 'Brasil', 'Rua Norte', '234', 'São Paulo', 'São Paulo', "12345678", '1132383102', 'ebac@email.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
        
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
        
    });

    it('Deve fazer cadastro de entrega com sucesso', () => {

        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep

        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});