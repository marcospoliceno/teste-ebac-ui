/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture("perfil").then(dados => {
            cy.login(dados.usuario, dados.senha)

        })

    });
    it('Deve realizar o cadastro de faturamento com sucesso - Fixed', () => {
        EnderecoPage.editarEnderecoFaturamento('Juca', 'Silva', 'Ebac', 'Brasil', 'Av teste', '33', 'Sao Paulo',
            'São Paulo', '89825000', '49991732700', 'juca@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });
    it('Deve realizar o cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
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
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')

    });
});